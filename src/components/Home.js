import React from 'react';
import Todos from './Todos';
import './Home.css';
import NewTodo from './NewTodo';

const Home = () => {
    const todos = [
        {
            id:1,
            title: "todo title 1",
            description: "todo description 1 is here"
        },
        {
            id:2,
            title: "todo title 1",
            description: "todo description 1 is here"
        },
    ]
    return (
        <div className='container'> 
            <h1 style={{color: "white"}}>Toto App</h1>

             <NewTodo></NewTodo>
             <Todos todos={todos}></Todos>
        </div>
    );
};

export default Home;