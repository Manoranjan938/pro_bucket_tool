import React from 'react'

import './TodoHeader.css'

const TodoHeader = () => {
  return (
    <>
      <div className="todo_header_component">
        <div className="header_details">
          <div className="todo_header_tabs">
            <span className='active_tab'>All</span>
            <span>Completed</span>
            <span>Pending</span>
          </div>
          <div className="todo_header">
            <button>Create a Todo</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoHeader