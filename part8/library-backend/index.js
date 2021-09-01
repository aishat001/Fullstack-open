const { ApolloServer, gql, UserInputError, AuthenticationError } = require('apollo-server');
const config = require('./utils/config')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Book = require('./models/book');
const Author = require('./models/author');
const User = require('./models/user');
const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub()


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
  born: Int!
  bookCount: Int! 
  id: ID!
}
type Book {
  title: String!
  author: Author!
  published: Int!
  genres: [String!]!
  id: ID!
}

type Query {
  bookCount: Int!
  authorCount: Int!
  allBooks(author: String, genre: String): [Book!]!
  allAuthors: [Author!]!
  me: User
}

  type Mutation {
    addBook(
      title: String!
      author: String!
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
  type Subscription {
    bookAdded: Book!
  }   
`

const resolvers = {
    Query: {
      bookCount: async () => {
        const res = await Book.find({})
        return res.length
      }, // Book.collection.countDocuments()
      authorCount: () => Author.collection.countDocuments(),

      allBooks: async (root, args) => {
        const books = await Book.find({}).populate('author')
  
        if (args.author) {
          const authorMatch = await Author.findOne({ name: args.author})
            if (authorMatch) {
              return  await Book.find({ author: authorMatch.id }).populate('author')

            }
          if (args.genre) {
            return await Book.find({ genres: { $in: [args.genre] } }).populate('author')
          }
      }
  
        return Book.find({}).populate('author')
      },
      // allBooks: async(root, args) => {
      //   if (args.author) {
      //     const foundAuthor = await Author.findOne({ name: args.author })
      //     if (foundAuthor) {
      //       if (args.genre) {
      //         return await Book.find({ author: foundAuthor.id, genres: { $in: [args.genre] } }).populate('author')
      //       }
      //       return  await Book.find({ author: foundAuthor.id }).populate('author')
      //     }
      //     return null
      //   }
  
      //   if (args.genre) {
      //     return Book.find({ genres: { $in: [args.genre] } }).populate('author')
      //   }
  
      //   return Book.find({}).populate('author')
  
      
      // },
      
      allAuthors:async () => await Author.find({}),
      me: (root, args, context) => {
        return context.currentUser
    }
  },

      Author: {
        bookCount:async (root) => {
          const bookMatch =await Book.find({ author: root.id})
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
        addBook: async (_, args, context) => {
          const currentUser = context.currentUser
          if (!currentUser) {
            throw new AuthenticationError("not authenticated")
          }
    
          let author = await Author.findOne({ name: args.author })
    
          if (!author) {
            author = await new Author({ name: args.author }).save()
          }
    
          const book = new Book({
            title: args.title,
            published: args.published,
            author,
            genres: args.genres
          })
    
          try {
            await book.save()
          } catch (error) {
            throw new UserInputError(error.message, { invalidArgs: args })
          }
          pubsub.publish('BOOK_ADDED', { bookAdded: book })
          return book
        },

        editAuthor:async (root, args) => {
          const author = await Author.findOne({ name: args.name })
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
      Subscription: {
        bookAdded: {
          subscribe: () => pubsub.asyncIterator(['BOOK_ADDED'])
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

server.listen(4000).then(({ url, subscriptionsUrl }) => {
  console.log(`Server ready at ${url}`)
  console.log(`Subscriptions ready at ${subscriptionsUrl}`)
})