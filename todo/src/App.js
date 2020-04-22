import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <TodoForm />
      <TodoList /> {/* Rendered the list of todos to the screen */}
    </div>
  )
};

export default App;
