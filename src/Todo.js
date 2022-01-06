import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete() {
        this.props.deleteTodo(this.props.id)
    }
    handleEdit() {

    }
    render() {
        return (
            <div>
                <span>{this.props.name} </span>
                <button onClick={this.handleEdit}> Edit</button>
                <button onClick={this.handleDelete}> Delete</button>
            </div>
        )
    }
}

export default Todo;
