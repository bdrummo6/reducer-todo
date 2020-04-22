import React from 'react';

const Todo = props => {
	return (
		<div 
            className='todo-task'
			style={props.todo.completed ? { textDecoration: 'line-through' } : null}
			onClick={() => props.toggleCompleted(props.todo.id)}
		>
			<span>-</span> {props.todo.task}
		</div>
	)
};

export default Todo;