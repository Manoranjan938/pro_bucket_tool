import TodoHeader from 'Components/TodoHeader/TodoHeader'
import React, { useState } from 'react'
import TodoList from 'Components/TodoList/TodoList';
import { TodoData } from './TodoData';

const Todos = () => {

  const [todoData] = useState(TodoData);
  const [filteredTodo, setFilteredTodo] = useState(TodoData);
  const [activeBtn, setActiveBtn] = useState('all');

  return (
    <>
      <TodoHeader
        todoData={todoData}
        setFilteredTodo={setFilteredTodo}
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
      />
      <TodoList data={filteredTodo} />
    </>
  );
}

export default Todos