import React, {useReducer, useState} from 'react';
import reducer, {ACTIONS} from "./reducer";
import Todo from "./Todo";
import {Header, Input, SubmitButton, TodoLists, Wrapper} from "./style";

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
            <Header>
              <h1>TODO LIST</h1>
              <h2>Hi {userName}, what’s your focus for today?</h2>
            </Header>
            <section>
                <form onSubmit={handleSubmit}>
                    <Input type="text" placeholder='Input whatever you like...' value={name} onChange={(event) => setName(event.target.value)}/>
                    <SubmitButton type='submit'>Add Task</SubmitButton>
                </form>
            </section>
            <TodoLists>
                {getTodoList().map((todo) => (
                    <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
                ))}
            </TodoLists>
        </div>
    )
}