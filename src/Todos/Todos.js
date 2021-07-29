import React, {useReducer, useState} from 'react';
import reducer, {ACTIONS} from "./reducer";
import Todo from "./Todo";
import {Footer, Header, Input, SubmitButton, TodoLists} from "./style";
import {useMediaQuery} from "react-responsive";
import {MIN_TABLET_WIDTH} from "./utils";

export const IsTabletInPut = ( {isTablet} ) => {
        return isTablet ? 'Add Task' : '+'
}

export default function Todos() {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos')) ? JSON.parse(window.localStorage.getItem('todos')) : []
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    const [name, setName] = useState('');
    const isTablet = useMediaQuery({ minWidth: MIN_TABLET_WIDTH })

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
        window.localStorage.setItem('todos', JSON.stringify([...todos, newTodo(name)]));
    };

    const deleteTodo = (todoItem) => {
        window.localStorage.setItem('todos', JSON.stringify(todos.filter((todo) => todo.id !== todoItem.id)));
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
                        <IsTabletInPut isTablet={isTablet}/>
                    </SubmitButton>
                </form>
            </section>
            <TodoLists>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} dispatch={dispatch} isTablet={isTablet} deleteTodo={deleteTodo}/>
                ))}
            </TodoLists>
            <Footer>
                Learn more about me
            </Footer>
        </div>
    )
}