import React from 'react';
import {ACTIONS} from "./reducer";
import {DeleteButton} from "./style";
import {useMediaQuery} from "react-responsive";
import {MAX_MOBILE_WIDTH, MIN_TABLET_WIDTH} from "./utils";

export default function Todo({ todo, dispatch }) {
    const Tablet = () => {
        const isTablet = useMediaQuery({ minWidth: MIN_TABLET_WIDTH })
        return isTablet ? 'Delete' : null
    }
    const Mobile = () => {
        const isMobile = useMediaQuery({ maxWidth: MAX_MOBILE_WIDTH })
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


