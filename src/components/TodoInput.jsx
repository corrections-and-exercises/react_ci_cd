import { addTodo } from '../utils/todo';
import { useState, useRef } from 'react';

function TodoInput({ setTodos }) {
  const initialState = {
    title: '',
    category: '',
    id: '',
    done: false,
  };
  const [formState, setFormState] = useState(initialState);
  const firstInput = useRef();

  const handleChange = (e) =>
    setFormState((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
      id: crypto.randomUUID(),
    }));

  function handleSubmit(e) {
    e.preventDefault();
    if (!formState.title) return;
    setTodos((prev) => addTodo(prev, formState));
    setFormState(initialState);
    firstInput.current.focus();
  }

  return (
    <form className='text-black col-start-3 col-end-5'>
      <fieldset className=' tracking-wide border text-center flex flex-col gap-4 mx-auto border-solid border-gray-300 p-3 w-4/6 '>
        <legend className='text-sm text-amber-200'>Add A Todo</legend>
        <label className='text-amber-50' htmlFor='title'>
          Title
        </label>
        <input
          type='text'
          name='title'
          id='title'
          onChange={handleChange}
          value={formState.title}
          ref={firstInput}
        />
        <label className='text-amber-50' htmlFor='category'>
          Category
        </label>
        <input
          onChange={handleChange}
          type='text'
          name='category'
          id='category'
          value={formState.category}
        />
        <button
          className='bg-amber-600  mx-auto p-4 my-2 text-gray-50'
          type='submit'
          onClick={handleSubmit}
        >
          Add Todo
        </button>
      </fieldset>
    </form>
  );
}

export default TodoInput;
