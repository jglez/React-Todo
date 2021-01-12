import React from 'react'
import data from '../data.js'

class Todo extends React.Component {
  render() {
    return (
      <div>
        <p>My tasks</p>

        {data.map(obj => {
          return <div key={obj.id}>{obj.task}</div>
        })}

      </div>
    )
  }
}

export default Todo