import React, { Component } from 'react';
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, newname: this.props.name }
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
        this.props.toggleCompleted(this.props.id);
    }
    render() {
        let result;
        if (this.state.isEditing) {
            result =
                (<div className='Todo'>
                    <form className='Todo-edit-form' onSubmit={this.handleSubmit}>
                        <input
                            type='text'
                            name='newname'
                            value={this.state.newname}
                            onChange={this.handleChange}
                        ></input>
                        <button>Save</button>
                    </form>
                </div>)
        } else {
            result =
                (<div className='Todo'>
                    <li
                        className={this.props.completed ? 'completed Todo-task' : 'Todo-task'} onClick={this.toggleTask}> {this.props.name}
                    </li>
                    <div className='Todo-buttons'>
                        <button onClick={this.handleEdit}>
                            <i class="fas fa-pencil-alt"></i>
                        </button>
                        <button onClick={this.handleDelete}>
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>)
        }
        return result;

    }
}

export default Todo;
