import React from 'react'

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state = {
      task: ''
    }
  }

  handleClick = (evt) => {
    console.log(evt.target.value)
  }

  render() {
    const initialFormValue = ''

    return (
      <>
        <label>New task:&nbsp;
          <input
            name='task'
            type='text'
            value={initialFormValue}
            onChange={this.handleClick}
          />
        </label>&nbsp;

        <button>Add Task</button>
      </>
    )
  }
}

export default TodoForm