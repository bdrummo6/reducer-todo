import React from "react";

const TodoList = props => {

    return (
        <div className='todo-list'>
			<h2>Todo List</h2>
            {/* Mapped through the state data to render the list of todos */}
            {props.state.map(todo => {
                return (
					<div className='todo' key={todo.id} dispatch={props.dispatch}>
						<p>{todo.task}</p>
					</div>
				)	
			})}
        </div>
    )
};

export default TodoList;
