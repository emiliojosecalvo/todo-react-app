import React, { Component } from 'react';

class Todo extends Component {
    static defaultProps = {
        task: 'Clean kitchen'
    }
    render() {
        return (
            <div>
                <span>{this.props.task} </span>
                <button> Edit</button>
                <button onCl> Delete</button>
            </div>
        )
    }
}

export default Todo;
