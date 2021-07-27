import React, {useEffect, useReducer, useState} from 'react';
import reducer, {ACTIONS} from "./reducer";
import Todo from "./Todo";
import './Todos.css';

export default function Todos() {
    const [todos, dispatch] = useReducer(reducer, JSON.parse(window.localStorage.getItem('todos')));
    const [name, setName] = useState('');
    const userName = 'Jing';

    const newTodo = (name) => {
        return {
            id: Date.now(),
            name,
        };
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: ACTIONS.ADD_TODO,
            payload: {
                todo: newTodo(name),
            },
        });
        setName('');
    };

    const getTodoList = () => {
        window.localStorage.setItem('todos', JSON.stringify(todos));
        return JSON.parse(window.localStorage.getItem('todos'))
    }

    return (
        <div>
            <section>
              <h1>TODO LIST</h1>
              <h2>Hi {userName}, what’s your focus for today?</h2>
            </section>
            <section className='todo-input'>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Input whatever you like...' value={name} onChange={(event) => setName(event.target.value)}/>
                    <button type='submit'>Add Task</button>
                </form>
            </section>
            <section className='todo-list'>
                {getTodoList().map((todo) => (
                    <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
                ))}
            </section>
        </div>
    )
}