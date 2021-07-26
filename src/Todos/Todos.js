import React, {useReducer, useState} from 'react';
import reducer, {ACTIONS} from "./reducer";

export default function Todos() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');
    const userName = 'Jing';

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: ACTIONS.ADD_TODO,
            payload: {
                todo: name,
            },
        });
        setName('');
    };

    return (
        <div>
            <section>
              <h1>TODO LIST</h1>
              <h2>Hi {userName}, what’s your focus for today?</h2>
            </section>
            <section>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Input whatever you like...' value={name} onChange={(event) => setName(event.target.value)}/>
                    <button type='submit'>Add Task</button>
                </form>
            </section>
        </div>
    )
}