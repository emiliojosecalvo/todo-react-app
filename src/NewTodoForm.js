import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css'


function NewTodoForm(props) {
    const [name, setName] = useState('');
    const handleChange = (ev) => {
        setName(ev.target.value)
    }
    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (name.length > 0) {
            let newTodo = { name, id: uuidv4(), completed: false };
            props.addTodo(newTodo);
            setName('');
        }
    }
    return (
        <form className='NewTodoForm' onSubmit={handleSubmit}>
            <label htmlFor='name'>New Todo</label>
            <input
                maxLength="20"
                type='text'
                name='name'
                id='name'
                value={name}
                onChange={handleChange}
            ></input>
            <button>Add</button>
        </form>
    )
}

export default NewTodoForm;
