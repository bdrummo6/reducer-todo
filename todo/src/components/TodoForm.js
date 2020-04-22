import React from 'react';

const TodoForm = () => {
	return (
		<div className='form-container'>
			<form className='todo-form'>
				<input
					type='text'
					name='todo'
					placeholder='Input todo...'
				/>
				<button>Add Todo</button>
			</form>
		</div>
	)
};

export default TodoForm;