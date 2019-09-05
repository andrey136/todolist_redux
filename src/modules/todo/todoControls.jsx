import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTodo } from './_actions/todoActions';

class TodoControls extends Component {

  loadTodo = () => {
    console.log('!!!');
    this.props.loadTodo();
  }

  render() {
    return <button onClick={this.loadTodo} type="submit">Load todos</button>;
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  loadTodo: () => dispatch(loadTodo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoControls);
