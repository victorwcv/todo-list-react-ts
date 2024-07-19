import { type TODO_FILTERS } from "./consts";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type TodoId = Pick<Todo, "id">;
export type TodoText = Pick<Todo, "text">;
export type TodoCompleted = Pick<Todo, "completed">;

export type ListOfTodos = Todo[];

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS];