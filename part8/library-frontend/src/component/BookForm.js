import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_BOOK } from "../queries";

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [published, setPublished] = useState(Number);
    const [genres, setGenres] = useState([]);
    const [genre, setGenre] = useState();


    const [ createBook ] = useMutation(ADD_BOOK)

    const addBook = (e) => {
        e.preventDefault()
        createBook({ variables : { title, author, published, genres }})
        
        setTitle('')
        setAuthor('')
        setPublished('')
        setGenres([])
    }

    const handleGenre = (e) => {
        e.preventDefault()
        setGenres(genres.concat(genre))
        setGenre('')
    }
    return ( 
        <div>

            <h1>Create a New Book</h1>
            <form onSubmit={addBook}>
                <input type="text" name="" value={title}  onChange={({target}) => setTitle(target.value)} placeholder="title"/><br/>
                <input type="text" name="" value={author}  onChange={({target}) => setAuthor(target.value)} placeholder="author"/><br/>
                <input type="number" name="" value={published}  onChange={({target}) => setPublished(parseInt(target.value))} placeholder="1970"/>

                <div>
                    <input type="text" value={genre} onChange={({target}) => setGenre(target.value)} placeholder="e.g classic"/>
                    <button onClick={handleGenre}>add genre</button>
                    <p>genre : {genres.join(' ')}</p>
                </div>

                <button type="submit">create book</button>
            </form>
        </div>
     );
}
 
export default BookForm;