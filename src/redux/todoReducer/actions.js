export const addTodo = (todo) => ({
    type: "ADD_TODO",
    payload: todo,
  });
  
  export const deleteTodo = (index) => ({
    type: "DELETE_TODO",
    payload: index,
  });
  
  export const updateTodoStatus = (index, status) => ({
    type: "UPDATE_TODO_STATUS",
    payload: { index, status },
  });
  