import React, { useReducer, useState } from 'react';
import { reducer, todo } from './reducers/reducer';

import Header from './components/Header';
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
        return; // No item is added to the list
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

  const clearCompleted = event => {
    event.preventDefault();

    dispatch({
        type: "CLEAR_COMPLETED"
    });
  };

  document.title = 'Reducer Todo App'; // Changed the html title element text 

  const appStyles = {
     width: '100%',
     height: '100vh',
     background: '#F9F1F1',
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     fontFamily: "'Averia Sans Libre', cursive"
  };

  return (
    <div className='App' style={appStyles}>
      <Header />
      <TodoForm task={task} handleChange={handleChange} addTodo={addTodo} clearCompleted={clearCompleted} dispatch={dispatch} />
      <TodoList state={state} todo={todo} toggleCompleted={toggleCompleted} dispatch={dispatch} /> 
    </div>
  )
};

export default App;
