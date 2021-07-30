import React from 'react';
import {ACTIONS} from "./reducer";
import {DeleteButton, Todos} from "./style";

export default function Todo({todo, dispatch, isTablet, deleteTodo}) {
    const handleClick = () => {
        dispatch({type: ACTIONS.DELETE_TODO, payload: todo});
        deleteTodo(todo);
    }

    const IsTablet = ( {isTablet} ) => {
        return isTablet ? 'Delete' : '-'
    }

    return (
        <div>
            <Todos>{todo.name}</Todos>
            <DeleteButton onClick={handleClick}>
                <IsTablet isTablet={isTablet}/>
            </DeleteButton>
        </div>
    );
}


