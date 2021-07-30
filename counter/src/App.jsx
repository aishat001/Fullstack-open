import React, { useState } from 'react'
import { createStore } from 'redux'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const countReducer = (state = 0, action) => {
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

  const store = createStore(countReducer)

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

export default App
