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