import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { ALL_AUTHORS } from "../queries";
import SetBirthYear from "./SetBirthYear";


const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const getAuthors = useQuery(ALL_AUTHORS)

  useEffect(() => {
      if (getAuthors.data) {
          const author = getAuthors.data.allAuthors
          setAuthors(author)
      }
  }, [getAuthors.data]);
  
  if (getAuthors.loading) {
    return <div>Loading...</div>
  }

  // console.log(authors);

    return ( 
        <div>
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>born</th>
                <th>bookCount</th>
              </tr>
              {
                authors.map(author =>
                  <tr key={author.name}>
                    <td>{author.name}</td>
                    <td>{author.born}</td>
                    <td>{author.bookCount}</td>
                </tr>
              )}
            </tbody>
          </table>
          <br/>
          <SetBirthYear authors={authors}/>
        </div>
     );
}
 
export default Authors;