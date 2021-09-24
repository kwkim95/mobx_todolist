import { makeAutoObservable } from "mobx";
import generateId from "../IDGenerator";

class TodoStore {
  todo = { id: "", title: "" };
  todos = [];
  constructor() {
    makeAutoObservable(this);
  }

  handlerSelect = (id) => {
    this.todo = this.todos.find((element) => element.id === id);
  };

  handlerAdd = () => {
    this.todos = this.todos.concat({ ...this.todo, id: generateId(5) });
  };

  handlerModify = () => {
    this.todos = this.todos.map((element) =>
      element.id === this.todo.id ? this.todo : element
    );
  };

  handlerRemove = () => {
    this.todos = this.todos.filter((element) => element.id !== this.todo.id);
  };

  handlerSetProps = (name, value) => {
    this.todo = { ...this.todo, [name]: value };
  };
}

export default new TodoStore();
