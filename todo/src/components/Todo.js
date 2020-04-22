import React from 'react';

import { ListGroupItem } from 'reactstrap';

const incompletedStyles = {
    width: '90%',
    textDecoration: 'none',
	 fontSize: '1.3rem',
    fontWeight: 'bold',
    color: 'lightblue',
    background: '#808080',
	 border: '2px solid lightblue',
	 borderRadius: '10px',
	 marginBottom: '10px'
}

const completedStyles = {
    width: '90%',
    textDecoration: 'line-through',
	 fontSize: '1.3rem',
    fontWeight: 'normal',
    color: '#90EE90',
    background: '#FFFFE0',
	 border: '2px solid #90EE90',
	 borderRadius: '10px',
	 marginBottom: '10px'
};

const Todo = props => {
	return (
		<ListGroupItem 
            className='todo-task'
			style={props.todo.completed ?  completedStyles  :  incompletedStyles }
			onClick={() => props.toggleCompleted(props.todo.id)}
		>
			 {props.todo.task}
		</ListGroupItem>
	)
};

export default Todo;