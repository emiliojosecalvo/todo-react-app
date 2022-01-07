import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
    }
    addTodo(newTodo) {
        this.setState({ todos: [...this.state.todos, newTodo] });
    }
    deleteTodo(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }
    updateTodo(id, newName) {
        const updatedTodos = this.state.todos.map(t => {
            if (t.id === id) {
                return { ...t, name: newName }
            }
            return t;
        });
        this.setState({ todos: updatedTodos })
    }
    toggleCompleted(id) {
        const updatedTodos = this.state.todos.map(t => {
            if (t.id === id) {
                return { ...t, completed: !t.completed }
            }
            return t;
        });
        this.setState({ todos: updatedTodos })
    }
    render() {
        const listTodos = this.state.todos.map(t => <Todo
            id={t.id}
            name={t.name}
            key={t.id}
            completed={t.completed}
            toggleCompleted={this.toggleCompleted}
            deleteTodo={this.deleteTodo}
            updateTodo={this.updateTodo} />)
        return (
            <div>
                <h1>TodoList</h1>
                <ul>
                    {listTodos}
                </ul>
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}

export default TodoList;

