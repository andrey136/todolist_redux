import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todoAdd } from './_actions/todoActions';
import { todoClear } from './_actions/todoClear';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(e) {
    e.preventDefault();

    this.props.todoAdd(this.state.name);

    this.setState({
      name: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.addTodo}>

        <input
          type="text"
          value={this.state.name}
          onChange={e => this.setState({
            name: e.target.value,
          })}
        />

        <button type="submit">Add todo</button>
        <button type="submit">Clear todo</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  todoAdd: todoName => dispatch(todoAdd(todoName)),
});

const mapDispatchToProps = dispatch => ({
  todoClear: () => dispatch(todoClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
