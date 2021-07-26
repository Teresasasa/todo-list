export default function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, action.payload.todo];
        case ACTIONS.DELETE_TODO:
            return todos.filter((todo) => todo !== action.payload);
        default:
            return todos;
    }
}


export const ACTIONS = {
    ADD_TODO: 'add_todo',
    DELETE_TODO: 'delete_todo',
};