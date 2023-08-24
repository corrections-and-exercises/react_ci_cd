import { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoContainer() {
  const [todos, setTodos] = useState([]);
  return (
    <div className='grid grid-cols-12 mt-6'>
      <TodoInput setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodoContainer;
