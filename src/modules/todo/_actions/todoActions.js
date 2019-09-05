import axios from 'axios';

export function todoAdd(todoName) {
  return dispatch =>
    dispatch({
      type: 'TODO_ADD',
      payload: todoName,
    });
}

export function loadTodo() {
  console.log('ACTION');

  return dispatch => axios.get('http://localhost:5000/')
    .then(res => {
        console.log(res);

        dispatch({
          type: 'TODO_LOAD',
          payload: res.data.list,
        });
      }
    )

}