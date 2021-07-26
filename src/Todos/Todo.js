import React from 'react';
import {ACTIONS} from "./reducer";

export default function Todo({ todo, dispatch }) {
    return (
        <div className='todo item'>
            <span>{todo}</span>
            <button
                onClick={() =>
                    dispatch({ type: ACTIONS.DELETE_TODO, payload: todo })
                }
            >
                Delete
            </button>
        </div>
    );
}


