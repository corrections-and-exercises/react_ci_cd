export function addTodo(todos, newTodo) {
  return [...todos, newTodo];
}

export function removeTodo(todos, id) {
  if (todos.length === 0) {
    return;
  }
  return todos.filter((t) => t.id !== id);
}

export function changeStatus(todos, id) {
  return todos.map((todo) =>
    todo.id === id ? {...todos, done: !todo.done} : todo
  );
}
