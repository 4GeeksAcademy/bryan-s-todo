import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

const API_URL = 'https://assets.breatheco.de/apis/fake/todos/user/bryan';

export default function ContextProvider(props) {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetchTodosOrInitializeTodos();
  }, []);

  const fetchTodosOrInitializeTodos = async () => {
    try {
      const getResponse = await fetch(API_URL);
      if (!getResponse.ok) {
        if (getResponse.status === 404) {
          await createTodoList([]);
        } else {
          console.error('Error fetching todos:', getResponse.status);
        }
      } else {
        const data = await getResponse.json();
        setTodoList(data);
      }
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const createTodoList = async (todos) => {
    try {
      await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(todos),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      fetchTodosOrInitializeTodos();
    } catch (error) {
      console.error('Error creating todos:', error);
    }
  };

  const addTodo = async (todo) => {
    const newTodoList = [...todoList, todo];
    setTodoList(newTodoList);
    await updateTodoList(newTodoList);
  };

  const deleteTodo = async (todoIndex) => {
    const newTodoList = todoList.filter((_, index) => index !== todoIndex);
    setTodoList(newTodoList);
    await updateTodoList(newTodoList);
  };

  const clearTodos = async () => {
    setTodoList([]);
    await updateTodoList([]);
  };

  const updateTodoList = async (todos) => {
    try {
      const response = await fetch(API_URL, {
        method: 'PUT',
        body: JSON.stringify(todos),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error updating todos: ' + response.statusText);
      }

    } catch (error) {
      console.error('Error updating todos:', error);
    }
  };

  return (
    <Context.Provider value={{ todoList, addTodo, deleteTodo, clearTodos }}>
      {props.children}
    </Context.Provider>
  );
}
