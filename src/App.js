import React from 'react'
import Todo from './components/Todo.js'
import './components/Todo.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>
        <Todo />
      </div>
    )
  }
}

export default App;
