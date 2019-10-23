const initialState = {
  todos: [],
  isOnlyActive: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload]
      };

    case "REFRESH_TODOS":
      return {
        ...state,
        todos: payload
      };

    case "SET_FILTER":
      return {
        ...state,
        isOnlyActive: payload
      };
    case "UPDATE_TODO":
      const updateTodos = state.todos.map(todo => {
        if(todo.id === payload.id)
          return payload;
        return todo;
      });
      return {
        ...state,
        todos: [...updateTodos]
      };
    default:
      return state
  }
}
