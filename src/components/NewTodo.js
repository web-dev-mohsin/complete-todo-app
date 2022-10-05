import React, { useState } from 'react';
import './newtodo.css'

const NewTodo = (props) => {

    const [todo, setTodo] = useState({title: "", description: "" });
    const {title, description} = todo;

    const changeHandler = (event) =>{
        const name = event.target.name;
        setTodo((oldTodo) => {
            return {...oldTodo, [name]: event.target.value}
        })
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        props.onNewTodo(todo);
        setTodo({title: "", description: ""})
    }
    return (
       <form className='form' onSubmit={submitHandler}>
            <div className='form-field'>
                <label htmlFor="title">Title: </label>
                <input 
                    type="text" 
                    id='title' 
                    name='title'
                    value={title}
                    onChange={changeHandler}
                />
            </div>
            <div className='form-field'>
                <label htmlFor="description">Description: </label>
                <textarea 
                    type="text" 
                    id='description' 
                    name='description'
                    value={description}
                    onChange={changeHandler}
                />
            </div>
            <button type='submit'>Add todo</button>
       </form>
    );
};

export default NewTodo;