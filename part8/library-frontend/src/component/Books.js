import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { ALL_BOOKS } from "../queries";


const Books = () => {
    const [books, setbooks] = useState([]);
    const Books = useQuery(ALL_BOOKS)

    useEffect(() => {
        if (Books.data) {
            const bookss = Books.data.allBooks
            setbooks(bookss)
        }
    }, [Books.data]);


    return ( 
        <div>
        
            <table>
            <tbody>
              <tr>
                <th></th>
                <th>author</th>
                <th>published</th>
              </tr>
              {
              books.map(book => 
                <tr key={book.title}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.published}</td>
                </tr>
              )}
            </tbody>
          </table>
       

       </div> 
     )
}
 
export default Books;