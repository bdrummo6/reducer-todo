import React from "react";

import Todo from './Todo';

const TodoList = props => {

    return (
        <div className='todo-list'>
			<h2>Your Todo List</h2>
            {/* Mapped through the state data to render the list of todos */}
            {props.state.map(todo => {
                return (
					<Todo 
                        key={todo.id} 
                        todo={todo}
                        dispatch={props.dispatch} 
                        toggleCompleted={props.toggleCompleted}
                    />
				)	
			})}
        </div>
    )
};

export default TodoList;
