import React from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo, updateTodoStatus } from "../redux/todoReducer/actions";
import Todo from "./Todo";
import "../css/TodoList.css";

class TodoList extends React.Component {
  state = {
    newTodo: "",
  };

  handleAddTodo = () => {
    if (this.state.newTodo.trim() === "") return;
    this.props.addTodo({ text: this.state.newTodo, status: "Todo" });
    this.setState({ newTodo: "" });
  };

  render() {
    return (
      <div className="todo-container">
        <h2>Todo List</h2>
        <div className="input-container">
          <input
            type="text"
            value={this.state.newTodo}
            onChange={(e) => this.setState({ newTodo: e.target.value })}
            placeholder="New Todo"
            className="todo-input"
          />
          <button onClick={this.handleAddTodo} className="add-button">
            Add Todo
          </button>
        </div>
        <div className="todo-list">
          {this.props.todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              deleteTodo={this.props.deleteTodo}
              updateTodoStatus={this.props.updateTodoStatus}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});

export default connect(mapStateToProps, { addTodo, deleteTodo, updateTodoStatus })(TodoList);