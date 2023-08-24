import Todo from './Todo';

function TodoList({ todos, setTodos }) {
  return (
    <div className='flex flex-col justify-center items-center w-full mx-auto col-start-7 col-end-10 text-center gap-2'>
      {todos?.map((t) => (
        <Todo key={t.id} todo={t} setTodos={setTodos} />
      ))}
    </div>
  );
}

export default TodoList;
