import { removeTodo, changeStatus } from '../utils/todo';

function Todo({ todo, setTodos }) {
  function handleDelete() {
    setTodos((prev) => removeTodo(prev, todo.id));
  }

  function handleStatusChange() {
    setTodos((prev) => changeStatus(prev, todo.id));
  }

  console.log(todo.done);

  return (
    <div
      className={`${
        todo.done
          ? 'border p-4 w-full grid grid-row-6 gap-2 opacity-50'
          : 'border p-4 w-full grid grid-row-6 gap-2'
      }`}
    >
      <p className='font-bold row-start-1 row-end-4'>{todo.title}</p>
      <p className='italic'>{todo.category}</p>
      <div className=' row-start-5 row-end-46'>
        <button
          className='hover:text-orange-700 border px-4 py-2 border-slate-900 mx-2 '
          onClick={handleDelete}
        >
          x
        </button>
        <button
          onClick={handleStatusChange}
          className='hover:text-orange-700 border px-4 py-2 border-slate-900 mx-2 '
        >
          done
        </button>
      </div>
    </div>
  );
}

export default Todo;
