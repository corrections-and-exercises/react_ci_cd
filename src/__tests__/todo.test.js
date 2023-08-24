import { describe, it, expect } from 'vitest';
import { removeTodo, addTodo, changeStatus } from '../utils/todo';

describe('todo functionalities', () => {
  //arrange general
  const todos = [
    {
      title: 'groceries',
      category: 'private',
      done: false,
      id: 'sjakh373u4hs',
    },
    {
      title: 'cleaning',
      category: 'private',
      done: false,
      id: 'sakjjkshdhf23jk',
    },
    {
      title: 'bike maintenance',
      category: 'private',
      done: false,
      id: 'sakfjhaslkj3h2',
    },
  ];
  it('should a new todo to the existing array of todos without mutating the original array', () => {
    // arrange
    const todos_short = [
      {
        title: 'groceries',
        category: 'private',
        done: false,
        id: 'sjakh373u4hs',
      },
      {
        title: 'cleaning',
        category: 'private',
        done: false,
        id: 'sakjjkshdhf23jk',
      },
    ];

    const newTodo = {
      title: 'bike maintenance',
      category: 'private',
      done: false,
      id: 'sakfjhaslkj3h2',
    };

    const expectedResult = [
      {
        title: 'groceries',
        category: 'private',
        done: false,
        id: 'sjakh373u4hs',
      },
      {
        title: 'cleaning',
        category: 'private',
        done: false,
        id: 'sakjjkshdhf23jk',
      },
      {
        title: 'bike maintenance',
        category: 'private',
        done: false,
        id: 'sakfjhaslkj3h2',
      },
    ];

    // act

    const newTodoList = addTodo(todos_short, newTodo);

    expect(newTodoList).toEqual(expectedResult);
    expect(todos_short.length).toBe(2);
    expect(newTodoList.length).toBe(3);
  });

  it('should remove a todos from the list of todos', () => {
    // arrange

    const expectedResult = [
      {
        title: 'groceries',
        category: 'private',
        done: false,
        id: 'sjakh373u4hs',
      },
      {
        title: 'bike maintenance',
        category: 'private',
        done: false,
        id: 'sakfjhaslkj3h2',
      },
    ];

    const idToRemove = 'sakjjkshdhf23jk';

    // act

    const newList = removeTodo(todos, idToRemove);

    expect(newList).toEqual(expectedResult);
    expect(newList.length).toBe(2);
  });

  it('should change the status of one todo', () => {
    const expectedResult = [
      {
        title: 'groceries',
        category: 'private',
        done: false,
        id: 'sjakh373u4hs',
      },
      {
        title: 'cleaning',
        category: 'private',
        done: true,
        id: 'sakjjkshdhf23jk',
      },
      {
        title: 'bike maintenance',
        category: 'private',
        done: false,
        id: 'sakfjhaslkj3h2',
      },
    ];

    const idToChange = 'sakjjkshdhf23jk';

    // act

    const newTodos = changeStatus(todos, idToChange);
    expect(newTodos).toEqual(expectedResult);
  });
});
