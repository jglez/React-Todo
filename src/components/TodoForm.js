import React from 'react'

class TodoForm extends React.Component {
  handleClick = (evt) => {
    console.log(evt.target.value)
  }

  render() {
    const initialFormValue = ''

    return (
      <>
        <form>
          <label>New Task:&nbsp;
            <input
              name='task'
              type='text'
              value={initialFormValue}
              onChange={this.handleClick}
              placeholder='Cool task'
            />
          </label>&nbsp;

          <button>Add</button>

        </form>
      </>
    )
  }
}

export default TodoForm