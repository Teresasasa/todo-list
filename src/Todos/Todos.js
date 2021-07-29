import React, {useReducer, useState} from 'react';
import reducer, {ACTIONS} from "./reducer";
import Todo from "./Todo";
import {Header, Input, SubmitButton, TodoLists} from "./style";
import {useMediaQuery} from "react-responsive";
import {MAX_MOBILE_WIDTH, MIN_TABLET_WIDTH} from "./utils";




export default function Todos() {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos')) ? JSON.parse(window.localStorage.getItem('todos')) : []
    const [todos, dispatch] = useReducer(reducer, initialTodos);
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

    const Tablet = () => {
        const isTablet = useMediaQuery({ minWidth: MIN_TABLET_WIDTH })
        return isTablet ? 'Add Task' : null
    }
    const Mobile = () => {
        const isMobile = useMediaQuery({ maxWidth: MAX_MOBILE_WIDTH })
        return isMobile ? '+' : null
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
                    <SubmitButton type='submit'>
                        <Tablet />
                        <Mobile />
                    </SubmitButton>
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