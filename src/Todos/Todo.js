import React from 'react';
import {ACTIONS} from "./reducer";
import {DeleteButton, Todos} from "./style";

export const IsTabletInLists = ( {isTabletInLists} ) => {
    return isTabletInLists ? 'Delete' : '-'
}

export default function Todo({todo, dispatch, isTablet, deleteTodo}) {
    const handleClick = () => {
        dispatch({type: ACTIONS.DELETE_TODO, payload: todo});
        deleteTodo(todo);
    }

    return (
        <div>
            <Todos>{todo.name}</Todos>
            <DeleteButton onClick={handleClick}>
                <IsTabletInLists isTabletInLists={isTablet}/>
            </DeleteButton>
        </div>
    );
}


