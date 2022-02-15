export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'DONE_TODO':
            return state.map(todo => (todo.id === action.id) ? { ...todo, done: !todo.done } : todo);
        case 'DONE_TODO-OLD':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state
    }
}