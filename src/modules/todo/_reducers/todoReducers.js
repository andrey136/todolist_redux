const initialState = {
  todoList: [
    {id: 1, name: 'Task 1'},
    {id: 2, name: 'Task 2'},
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

    case 'TODO_LOAD' :
      return {
        ...state,
        todoList: [
          ...state.todoList,
          ...adaptLoaded(action.payload),
        ]
      };

    default:
      return state;
  }
};

export default todo;

function adaptLoaded(loadedArray){
  return loadedArray.map(el => ({ name: el.title, id: el.title }));
}
