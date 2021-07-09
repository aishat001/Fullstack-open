import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    const vote = (id) => {
      dispatch(voteAnecdote(id))
    };


    return (
        <div>

            {
                anecdotes
                    .sort((a, b) => b.votes - a.votes)
                    .map(anecdote => 
                        <div key={anecdote.id}>
                            <div>
                            {anecdote.content}
                        </div>
                        <div>
                         has votes:   {anecdote.votes}
                        </div>,
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                        </div>
                        )
            }

        </div>
    )
}

export default AnecdoteList