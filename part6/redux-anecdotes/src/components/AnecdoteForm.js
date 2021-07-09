import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const add = (e) => {
        e.preventDefault();
        const content = e.target.anecdote.value;
        dispatch(addAnecdote(content));
        e.target.anecdote.value = "";
    
      }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={add}>
                <input type="text" name="anecdote"/>
                <button> create </button>
            </form>
        </div>
    )
}
export default AnecdoteForm;