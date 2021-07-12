import React  from 'react'
import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdotes";
import { setNotification } from '../reducers/notifications';

const AnecdoteList = () => {
    const  {anecdotes, filter} = useSelector(state => state)
    const dispatch = useDispatch()

    const vote = ({id, content}) => {
      dispatch(voteAnecdote(id))
      dispatch(setNotification(`you just voted ${content}`))
    };


    return (
        <div>

            {
                []
                    .concat(anecdotes)
                    .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
                    .sort((a, b) => b.votes - a.votes)
                    .map(anecdote => 
                        <div key={anecdote.id}>
                            <div>
                            {anecdote.content}
                        </div>
                        <div>
                         has votes:   {anecdote.votes}
                        </div>,
                        <button onClick={() => vote(anecdote)}>vote</button>
                        </div>
                    )
            }

        </div>
    )
}

export default AnecdoteList