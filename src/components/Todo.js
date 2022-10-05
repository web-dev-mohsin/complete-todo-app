import React from 'react';
import './Todo.css'
const Todo = (props) => {
    const {title, description} = props.todo;
    const {id} = props; 

    const handleDelete = (id)=>{
        props.onRemoveTodo(id)
    }
    return (
        <div className='todo'>
            <div>
            <h1>{title}</h1>
            <p>{description}</p>
            </div>
             
            <button onClick={()=>{handleDelete(id)}}>
            <i class="fa-solid fa-trash"></i>
            </button>
           
        </div>
        
    );
};

export default Todo;