import React from 'react';
import {ACTIONS} from "./reducer";
import {DeleteButton} from "./style";

export default function Todo({ todo, dispatch }) {
    return (
        <div>
            <span>{todo.name}</span>
            <DeleteButton onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: todo })}>Delete</DeleteButton>
        </div>
    );
}


