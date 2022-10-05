import React from 'react';
import Todo from './Todo';
import './Todos.css';

const Todos = (props) => {
    const todos = props.todos;
    return (
        <div className='todos'>
            <section>
                {
                   todos.map((todo) => <Todo onRemoveTodo={props.onRemoveTodo} key={todo.id} id={todo.id} todo={todo.todo}></Todo>) 
                }
            </section>
        </div>
    );
};

export default Todos;