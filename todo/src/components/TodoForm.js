import React from "react";

import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const TodoForm = props => {
    
    return (
        <Container className='form-container'>
            <Form class='todo-form' onSubmit={props.addTodo}>
                <Label for="todoInput">
                    <Col>
                        <Input
                            type='text'
                            name='todo'
                            id='todoInput'
                            placeholder='Input todo item...'
                            onChange={props.handleChange}
                            value={props.task}
                        />
                    </Col>
                </Label>    
                <FormGroup>
                    <Button color='primary' size='md'>Add Todo</Button>{'  '}
                    <Button color='warning' size='md' onClick={props.clearCompleted}>Clear Completed</Button>
                </FormGroup>
            </Form>
        </Container>
    )
};

export default TodoForm;