import React from 'react';
import {ACTIONS} from "./reducer";
import {DeleteButton} from "./style";
import {useMediaQuery} from "react-responsive";

export default function Todo({ todo, dispatch }) {
    const Tablet = () => {
        const isTablet = useMediaQuery({ minWidth: 768 })
        return isTablet ? 'Delete' : null
    }
    const Mobile = () => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? '-' : null
    }


    return (
        <div>
            <span>{todo.name}</span>
            <DeleteButton onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: todo })}>
                <Tablet />
                <Mobile />
            </DeleteButton>
        </div>
    );
}


