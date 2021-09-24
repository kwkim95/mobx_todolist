import React, { Component } from "react";
import { observer } from "mobx-react";
import TodoStore from "../stores/TodoStore";

class TodoInputContainer extends Component {
  todoStore = TodoStore;
  render() {
    return (
      <div>
        Title :
        <input
          type="text"
          name="title"
          value={this.todoStore.todo.title}
          onChange={(e) =>
            this.todoStore.handlerSetProps(e.target.name, e.target.value)
          }
          placeholder="일정입력"
        />
        <br />
        <button onClick={() => this.todoStore.handlerAdd()}>추가</button>
        &nbsp;&nbsp;
        <button onClick={() => this.todoStore.handlerRemove()}>삭제</button>
        &nbsp;&nbsp;{" "}
        <button onClick={() => this.todoStore.handlerModify()}>수정</button>
      </div>
    );
  }
}

export default observer(TodoInputContainer);
