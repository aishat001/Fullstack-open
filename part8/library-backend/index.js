const { ApolloServer, gql, UserInputError, AuthenticationError } = require('apollo-server');
const config = require('./utils/config')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Book = require('./models/book');
const Author = require('./models/author');
const User = require('./models/user');


console.log('connenting to', config.MONGODB_URI);
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(() => {
  console.log('connected to MongoDB')
})
.catch((error) => {
  console.log('error connection to MongoDB:', error.message)
})


const typeDefs = gql` 
type User {
  username: String!
  id: ID!
}
type Token {
  value: String!
}
type Author {
  name: String!
  bookCount: Int! 
  born: Int!
  id: ID!
}
type Book {
  title: String!
  author: Author!
  published: Int!
  genres: [String!]!
}

type Query {
  bookCount: Int!
  authorCount: Int!
  allBooks(author: String, genres: String): [Book!]!
  allAuthors: [Author!]!
  me: User
}

  type Mutation {
    addBook(
      title: String!
      published: Int!
      genres: [String!]!
    ) : Book

    editAuthor(
      name: String!
      born: Int!
    ) : Author
    addAuthor(
      name: String!
      born:Int!
    ): Author
    createUser(
      username: String!
    ): User
    login(
      username: String!
      password: String!
    ): Token
  }   
`

const resolvers = {
    Query: {
      bookCount: () => Book.collection.countDocuments(),
      authorCount: () => Author.collection.countDocuments(),

      allBooks: (root, args) => {
        if (args.author) {
          return Book.find({ author: args.author})
        } else if (args.genres) {
          return Book.find({ genres: args.genres})
          }
        return Book.find({})
      },
      allAuthors: () => Author.find({}),
      me: (root, args, context) => {
        if (!context.user) return [];

        return ['bob', 'jake'];      }
    },

      Author: {
        bookCount: (root) => {
          const bookMatch = books.filter( book => book.author === root.name )
          return bookMatch.length
        }
      },

      Mutation: {
        addAuthor: async (root, args) => {
          const author = new Author({...args})
          try {
            return author.save()
          }catch(error) {
            throw new UserInputError(error.message, {
               invalidArgs: args,
            })
           }
        },
        addBook:async (root, args) => {
          const book = new Book({...args})
          const author = Author.find({})

          try {
            await book.save()
          } catch(error) {
           throw new UserInputError(error.message, {
              invalidArgs: args,
           })
          }

          return book;
        },
   
        editAuthor:async (root, args) => {
          const author = await Author.findOne({ author: args.auth })
          author.born = args.born

          try {
            await author.save()

          } catch(error) {
            throw new UserInputError(error.message, {
              invalidArgs: args,
          })
          }

          if (!author) {
              return null
          }
          return author
        },

        createUser: (root, args) => {
          const user = new User({ username: args.username })
      
          return user.save()
            .catch(error => {
              throw new UserInputError(error.message, {
                invalidArgs: args,
              })
            })
        },
    
        login: async (root, args) => {
          const user = await User.findOne({ username: args.username })
      
          if ( !user || args.password !== 'adedayo1' ) {
            throw new UserInputError("wrong credentials")
          }
      
          const userForToken = {
            username: user.username,
            id: user._id,
          }
      
          return { value: jwt.sign(userForToken, process.env.JWT_SECRET) }
        },
      },
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
       const auth = req ? req.headers.authorization : null
      if (auth) {
        const decodedToken = jwt.verify(
          auth.substring(7), config.JWT_SECRET
        )
        const currentUser = await User.findById(decodedToken.id)
        return { currentUser }
        }
    }
})

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
  })