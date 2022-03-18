import Todo from 'Components/TodoCard/Todo'
import React from 'react'

import {motion} from 'framer-motion'

import './TodoList.css'

const TodoList = ({data}) => {

  return (
    <>
      <div layout className="todo__lists">
        {
          data.map((item, index) => {
            return(
              <Todo todoItems={item} key={index} />
            )
          })
        }
      </div>
    </>
  );
}

export default TodoList