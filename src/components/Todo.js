import React from 'react';
import './Todo.css'
const Todo = (props) => {
    const {title, description} = props.todo
    return (
        <div className='todo'>
            <div>
            <h1>{title}</h1>
            <p>{description}</p>
            </div>
             
            <button>
            <i class="fa-solid fa-trash"></i>
            </button>
           
        </div>
        
    );
};

export default Todo;