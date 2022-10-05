import React, { useState } from 'react';
import Todos from './Todos';
import './Home.css';
import NewTodo from './NewTodo';
import {v4 as uuidv4} from "uuid";

const Home = () => {
   
    const [todo, setTodo] = useState([]);
    const addNewtodos = (todo)=>{
        setTodo((preTodo) =>{
            return [...preTodo, {id: uuidv4(), todo}]
        });
    }

    const handleRemove = (id) => {
        
        setTodo((prevTodo)=>{
            const filterTodos = prevTodo.filter((todo)=> todo.id !== id);
            return filterTodos;
        })
    }
    return (
        <div className='container'> 
            <h1 style={{color: "white"}}>Toto App</h1>

             <NewTodo onNewTodo={addNewtodos}></NewTodo>
             <Todos onRemoveTodo={handleRemove} todos={todo}></Todos>
        </div>
    );
};

export default Home;