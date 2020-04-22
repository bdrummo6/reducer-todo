import React from 'react';

import { TodoList } from './components/TodoList';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <TodoList /> {/* Rendered the list of todos to the screen */}
    </div>
  )
};

export default App;
