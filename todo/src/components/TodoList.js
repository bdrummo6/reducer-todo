import React from "react";

import Todo from './Todo';

import { Container, ListGroup } from 'reactstrap';

const TodoList = props => {
    const listStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }

    const h2Styles = {
        width: '100%',
        marginBottom: '15px'
    }

    return (
        <Container style={{ width: '35%', marginTop: '15px' }}>
            <ListGroup style={listStyles}>
                <h2 style={h2Styles}>Your Todo List</h2>
                <h4>Number of Todos: {props.state.length}</h4>
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
            </ListGroup>
        </Container>
    )
};

export default TodoList;
