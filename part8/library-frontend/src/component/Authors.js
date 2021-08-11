import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { ALL_AUTHORS } from "../queries";


const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const Authors = useQuery(ALL_AUTHORS)

  useEffect(() => {
      if (Authors.data) {
          const authorss = Authors.data.allAuthors
          setAuthors(authorss)
      }
  }, [Authors.data]);
  
  if (Authors.loading) {
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
                 
        </div>
     );
}
 
export default Authors;