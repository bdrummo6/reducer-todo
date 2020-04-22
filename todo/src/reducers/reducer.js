import todoData from '../todoData';

// Set the initial state to the array of todos in todoData.js
export const todo = todoData;

export const reducer = (state) => {
    console.log('state', state);
    return state;
};