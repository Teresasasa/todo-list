export default function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, action.payload.todo];
        default:
            return todos;
    }
}


export const ACTIONS = {
    ADD_TODO: 'add_todo',
};