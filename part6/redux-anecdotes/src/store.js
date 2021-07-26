import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdotes from './reducers/anecdotes'
import filter from './reducers/filter'
import notification from './reducers/notifications'


const reducer = combineReducers({
    anecdotes,
    notification,
    filter
})
const store = createStore(reducer, composeWithDevTools())

ane

export default store