const initialState = {
    todos : [],
}

const todoReducer = (state = initialState, action) => {
        switch(action.type){
            case "ADD_TODO":
                return { ...state, todos: [...state.todos, action.payload] };
            case "DELETE_TODO":
                return { ...state, todos: state.todos.filter((_, index) => index !== action.payload) };
            case "UPDATE_TODO_STATUS":
                return {
                  ...state,
                  todos: state.todos.map((todo, index) =>
                    index === action.payload.index ? { ...todo, status: action.payload.status } : todo
                  ),
                };
            default:
                return state;
        }
}
export default todoReducer;