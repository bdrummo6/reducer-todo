import React, { useReducer, useState } from 'react';
import { reducer, todo } from './reducers/reducer';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css';

const App = () => {
	// console.log(todo);
  const [state, dispatch] = useReducer(reducer, todo); 
  const [task, setTask] = useState('');

  const handleChange = event => {
    setTask(event.target.value);
  };

  const addTodo = event => {
      event.preventDefault();
      
      dispatch({
          type: 'ADD_TODO',
          payload: task
      });
      
      setTask('');
  };

  return (
    <div className='App'>
      <TodoForm task={task} handleChange={handleChange} addTodo={addTodo} dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} /> {/* Rendered the list of todos to the screen */}
    </div>
  )
};

export default App;
