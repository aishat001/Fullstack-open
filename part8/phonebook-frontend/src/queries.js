import { gql } from "@apollo/client";


export const FIND_PERSON = gql`
query findPersonByName($nameToSearch: String!) {
  findPerson(name: $nameToSearch) {
    name
    phone 
    id
    address {
      street
      city
    }
  }
}
`
export const ALL_PERSONS = gql`
query getAllPersons{
  allPersons {
    name,
    phone,
    id
  }
}
`
export const CREATE_PERSON = gql`
mutation createPerson($name: String!, $street: String!, $city: String!, $phone: String) {
  addPerson(
    name: $name,
    phone: $phone,
    street: $street,
    city: $city
  ) {
    name
    phone 
    id
    address {
      street
      city
    }
  }
}
`
export const EDIT_PHONE = gql`
mutation editNumber($name: String!, $phone: String!) {
  editNumber(
    name: $name,
    phone: $phone,
  ) {
    name
    phone 
    id
    address {
      street
      city
    }
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