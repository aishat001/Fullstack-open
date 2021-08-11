import { gql } from "@apollo/client";


export const ALL_AUTHORS = gql`
query allAuthors {
  allAuthors {
    name,
    born,
    bookCount
  }
}
`
export const ALL_BOOKS = gql`
query getAllBooks {
  allBooks {
    title,
    author,
    published,
    genres
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
    author,
    published,
    genres
  }
}

`