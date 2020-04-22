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
      
      if(!task.replace(/\s/g, '').length) { // Checks if the input only contains spaces
        setTask(''); // Resets input field if input only contains spaces
        alert('Please input a todo item.'); // Alerts user they must input something
        return; // No todo item is added to the list
      }

      dispatch({
          type: 'ADD_TODO',
          payload: task
      });
      
      setTask('');
  };

  const toggleCompleted = id => {
    dispatch({
        type: "TOGGLE_COMPLETED",
        payload: id
    });
};

  return (
    <div className='App'>
      <TodoForm task={task} handleChange={handleChange} addTodo={addTodo} dispatch={dispatch} />
      <TodoList state={state} todo={todo} toggleCompleted={toggleCompleted} dispatch={dispatch} /> {/* Rendered the list of todos to the screen */}
    </div>
  )
};

export default App;
