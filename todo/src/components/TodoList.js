import React, { useReducer } from "react";
import { reducer, todo } from '../reducers/reducer';


const TodoList = () => {
	// console.log(todo);
    const [state] = useReducer(reducer, todo); 

    return (
        <div className='todo-list'>
			<h2>Todo List</h2>
            {/* Mapped through the state data to render the list of todos */}
            {state.map(todo => {
                return (
					<div className='todo' key={todo.id}>
						<p>{todo.task}</p>
					</div>
				)	
			})}
        </div>
    )
};

export default TodoList;
