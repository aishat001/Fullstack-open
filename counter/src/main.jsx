import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'ZERO':
      return 0
    default:
      return state
  }
}

const store = createStore(counterReducer)

const App = () => {
  return (
    <div className="App">
      <div>
        {store.getState()}
      </div>

          <button type="button" onClick={(e) => store.dispatch({type: 'INCREMENT'})}>PLUS</button>
          <button type="button" onClick={(e) => store.dispatch({type: 'DECREMENT'})}>MINUS</button>
          <button type="button" onClick={(e) => store.dispatch({type: 'ZERO'})}>ZERO</button>

    </div>
  )
}
const renderApp = () => {
ReactDOM.render(<App />,document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
