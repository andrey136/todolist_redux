const initialState = {
  todoList: [
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' },
  ],
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            name: action.payload,
            id: Math.random(),
          }],
      };
    case 'TODO_CLEAR' :
      return{

      };

    default:
      return state;
  }
};

export default todo;
