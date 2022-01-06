import React, { Component } from 'react';

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
        //Here goes the function to add the new todo
        this.setState({ name: '' })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>New Todo</label>
                    <input
                        name='name'
                        id='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    ></input>
                    <button>Add New Todo</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm;
