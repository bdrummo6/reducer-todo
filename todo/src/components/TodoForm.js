import React from "react";

const TodoForm = props => {
    
    return (
        <div className='form-container'>
            <form class='todo-form'>
                <input  
                    type='text'
					name='todo'
					placeholder='Input todo item...'
                    onChange={props.handleChange}
                    value={props.task} 
                />
                <button onClick={props.addTodo}>Add Item</button>
            </form>
        </div>
    )
};

export default TodoForm;