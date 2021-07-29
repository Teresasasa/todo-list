import React from 'react';
import {ACTIONS} from "./reducer";
import {DeleteButton, Todos} from "./style";
import {useMediaQuery} from "react-responsive";
import {MIN_TABLET_WIDTH} from "./utils";

export default function Todo({todo, dispatch}) {
    const IsTablet = () => {
        const isTablet = useMediaQuery({minWidth: MIN_TABLET_WIDTH})
        return isTablet ? 'Delete' : '-'
    }

    return (
        <div>
            <Todos>{todo.name}</Todos>
            <DeleteButton onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: todo})}>
                <IsTablet/>
            </DeleteButton>
        </div>
    );
}


