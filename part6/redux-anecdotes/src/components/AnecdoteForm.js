import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdotes";
import { setNotification } from "../reducers/notifications";

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const add = event => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        dispatch(addAnecdote(content));
        event.target.anecdote.value = '';
        dispatch(setNotification(`You added '${content}'`));
    };

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