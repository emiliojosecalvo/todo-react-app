import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css'


class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    handleSubmit(ev) {
        ev.preventDefault();
        if (this.state.name.length > 0) {
            let newTodo = { ...this.state, id: uuidv4(), completed: false };
            this.props.addTodo(newTodo);
            this.setState({ name: '' })
        }
    }
    render() {
        return (
            <form className='NewTodoForm' onSubmit={this.handleSubmit}>
                <label htmlFor='name'>New Todo</label>
                <input
                    maxLength="20"
                    type='text'
                    name='name'
                    id='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                ></input>
                <button>Add</button>
            </form>
        )
    }
}

export default NewTodoForm;
