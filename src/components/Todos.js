import React from 'react';
import Todo from './Todo';
import './Todos.css';

const Todos = (props) => {
    const todos = props.todos;
    return (
        <div className='todos'>
            <section>
                {
                   props.todos.map((todo) => <Todo key={todo.id} todo={todo}></Todo>) 
                }
            </section>
        </div>
    );
};

export default Todos;