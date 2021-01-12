import React from 'react'
import data from '../data.js'

class Todo extends React.Component {
  handleClick = (evt) => {
    console.log('clicky')
  }

  render() {
    return (
      <div>
        <p>My tasks</p>
        <div className='task-container'>
          {data.map(obj => {
            return <div className='task' onClick={this.handleClick} key={obj.id}>{obj.task}</div>
          })}
        </div>

      </div>
    )
  }
}

export default Todo