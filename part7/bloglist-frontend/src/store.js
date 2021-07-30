import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import blogReducer from './redux/reducers/blogReducer'
import notificationReducer from './redux/reducers/notificationReducer'

const reducers = combineReducers({
  blog: blogReducer,
  notification: notificationReducer })

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store