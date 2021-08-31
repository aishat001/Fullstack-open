import { gql } from "@apollo/client";


export const ALL_AUTHORS = gql`
query allAuthors {
  allAuthors {
    name
    born
    bookCount
    id
  }
}
`
export const ALL_BOOKS = gql`
query Query {
  allBooks {
    title
    id
    genres
    published
    author {
      bookCount
      id
      name
      born
    }
  }
}
`

export const ADD_BOOK = gql`
mutation AddBookMutation($title: String!, $author: String!, $published: Int!, $genres: [String!]!) {
  addBook(
    title: $title,
    author: $author,
    published: $published,
    genres: $genres
    ) {
    title,
    author {
      name
      born
    }
    published,
    genres
  }
}
`
export const ADD_BIRTH_YEAR = gql`
mutation Mutation($name: String!, $born: Int!) {
  editAuthor(
    name: $name, 
    born: $born
    ) {
    name
    born
    id
  }
}
`
export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)  {
      value
    }
  }
`
export const CURRENT_USER = gql`
query Query {
  me {
    username
    id
  }
}
`