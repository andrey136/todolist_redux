export function todoClear(){
  return dispatch =>
    dispatch({
      type: 'TODO_CLEAR'
    });
}