import { useQuery } from "@apollo/client";
import { ALL_AUTHORS } from "../queries";
// import SetBirthYear from "./SetBirthYear";


const Authors = () => {
  const getAuthors = useQuery(ALL_AUTHORS)
  console.log(getAuthors);
    // const authors = getAuthors.data.allAuthors

  
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
                getAuthors.data.allAuthors.map(author =>
                  <tr key={author.name}>
                    <td>{author.name}</td>
                    <td>{author.born}</td>
                    <td>{author.bookCount}</td>
                </tr>
              )}
            </tbody>
          </table>
          <br/>
          {/* <SetBirthYear authors={authors}/> */}
        </div>
     );
}
 
export default Authors;