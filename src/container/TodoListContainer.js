import React, { Component } from "react";
import { observer } from "mobx-react";
import TodoItemView from "../view/TodoItemView";
import TodoStore from "../stores/TodoStore";

class TodoListContainer extends Component {
  todoStore = TodoStore;
  render() {
    const TodoList = this.todoStore.todos.map((todo, index) => {
      return (
        <span onClick={() => this.todoStore.handlerSelect(todo.id)} key={index}>
          <TodoItemView key={todo.id} todo={todo} />
        </span>
      );
    });

    return (
      <div>
        <h3>목록</h3>
        {Array.isArray(this.todoStore.todos) && this.todoStore.todos.length ? (
          TodoList
        ) : (
          <span>Empty</span>
        )}
      </div>
    );
  }
}

export default observer(TodoListContainer);
