import React, { Component } from 'react';
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, newname: this.props.name, isDone: false }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggleTask = this.toggleTask.bind(this)
    }
    handleDelete() {
        this.props.deleteTodo(this.props.id)
    }
    handleEdit() {
        this.setState({ isEditing: !this.state.isEditing })
    }
    handleChange(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    handleSubmit(ev) {
        ev.preventDefault();
        this.props.updateTodo(this.props.id, this.state.newname);
        this.handleEdit();
    }
    toggleTask() {
        this.setState({ isDone: !this.state.isDone })
    }
    render() {
        let cTodo;
        if (this.state.isDone) {
            cTodo = 'Finished'
        } else {
            cTodo = ''
        }
        let result;
        if (this.state.isEditing) {
            result =
                (
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type='text'
                            name='newname'
                            value={this.state.newname}
                            onChange={this.handleChange}
                        ></input>
                        <button>Save</button>
                    </form>
                )
        } else {
            result =
                (
                    <div>
                        <li>
                            <span onClick={this.toggleTask} className={cTodo}>{this.props.name} </span>
                            <button onClick={this.handleEdit}> Edit</button>
                            <button onClick={this.handleDelete}> Delete</button>
                        </li>
                    </div>
                )
        }
        return result;

    }
}

export default Todo;
