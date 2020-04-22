import todoData from '../todoData';

// Set the initial state to the array of todos in todoData.js
export const todo = todoData;

export const reducer = (state, action) => {
    console.log('state', state);
    switch (action.type) {
        case "ADD_TODO":
            console.log('state', state);
            return [
                ...state,
                {
                    task: action.payload, 
                    id: Date.now(),
                    completed: false
                }
            ];
        case "TOGGLE_COMPLETED":
            return state.map(todo => {
                if (todo.id === action.payload){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            });    
        default:
            return state;
    }
};