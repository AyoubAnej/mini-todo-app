// src/components/Todo.js
import React from "react";
import "../css/Todo.css";

class Todo extends React.Component {
  render() {
    const { todo, index, deleteTodo, updateTodoStatus } = this.props;

    return (
      <div className="todo-item">
        <input type="text" value={todo.text} readOnly className="todo-text" />
        <select
          value={todo.status}
          onChange={(e) => updateTodoStatus(index, e.target.value)}
          className="status-select"
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button onClick={() => deleteTodo(index)} className="delete-button">
          Delete
        </button>
      </div>
    );
  }
}

export default Todo;