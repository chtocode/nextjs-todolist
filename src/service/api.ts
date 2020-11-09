import { ReactText } from "react";
import { TodoValuesWithKeyProp } from "../components/Todo-list";

/**
 * Just for mock api request, actually need to interact with server by http request.
 */
export class Api {
  todoList: TodoValuesWithKeyProp[] = [];

  getTodo(id: ReactText): TodoValuesWithKeyProp | undefined {
    return this.todoList.find(item => item.key === id);
  }

  removeTodos(ids: ReactText[]): void {
    this.todoList = this.todoList.filter(item => !ids.includes(item.key))
  }
}

const instance = new Api();

export default instance;
