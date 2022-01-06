import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    render() {
        return (
            <div>
                <h1>TodoList Component</h1>
                <Todo />
                <NewTodoForm />
            </div>
        )
    }
}

export default TodoList;

