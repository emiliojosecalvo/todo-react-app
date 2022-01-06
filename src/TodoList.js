import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
    }
    addTodo(newTodo) {
        console.log(newTodo)
        this.setState({ todos: [...this.state.todos, newTodo] })
    }
    deleteTodo(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }
    render() {
        return (
            <div>
                <h1>TodoList</h1>
                {this.state.todos.map(t =>
                    <Todo
                        id={t.id}
                        name={t.name}
                        key={t.id}
                        deleteTodo={this.deleteTodo}
                    />
                )}
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}

export default TodoList;

