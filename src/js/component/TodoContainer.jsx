import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Todo from './Todo';
import TodoActions from '../context/actions/TodoActions';
import TodoStore from '../context/TodoStore';


export default function TodoContainer() {
  const [userInput, setUserInput] = useState('');
  const [todos, setTodos] = useState(TodoStore.getState());

  useEffect(() => {
    const updateState = () => {
      setTodos(TodoStore.getState());
    };
  
    const unsubscribe = TodoStore.addListener(updateState);
  
    updateState();
  
    return () => {
      unsubscribe.remove();
    };
  }, []);

  const onChangeHandler = (event) => setUserInput(event.target.value);

  const addTodoHandler = (event) => {
    if (event.key === 'Enter' && userInput.trim() !== '') {
      TodoActions.create({ label: userInput, done: false });
      setUserInput('');
    }
  };

  const deleteTodoHandler = TodoActions.delete;

  const remainingItemCount = todos.length;

  return (
    <div className="container-sm todo-container">
      <Link to="/Landing" className="btn btn-primary btn-lg ld-btn">Landing Page</Link>
      <ul className="list-group list-group-sm ls-group">
        <li className="list-group-item">
          <form onSubmit={(e) => e.preventDefault()} className="todo-form">
            <input
              value={userInput}
              onChange={onChangeHandler}
              onKeyUp={addTodoHandler}
              placeholder="What Needs To Be Done?"
              className="todo-input form-control"
            />
          </form>
        </li>
        {todos.map((todo, index) => (
          <li className="list-group-item" key={index}>
            <Todo todo={todo} onDelete={() => deleteTodoHandler(index)} />
          </li>
        ))}
        <li className="list-group-item">
          <div className="count-box justify-content-between align-center">
            <span className='text-muted'>{remainingItemCount} {remainingItemCount === 1 ? 'item' : 'items'} left</span>
          </div>
        </li>
      </ul>
      <div className="count-box-background-one"></div>
      <div className="count-box-background-two"></div>
    </div>
  );
}
