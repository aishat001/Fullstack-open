import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import blogReducer from './redux/reducers/blogReducer'
import notificationReducer from './redux/reducers/notificationReducer'
import userReducer from './redux/reducers/userReducer'
import loginReducer from './redux/reducers/loginReducer'

const reducers = combineReducers({
  blog: blogReducer,
  notification: notificationReducer,
  userReducer,
  loginReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store