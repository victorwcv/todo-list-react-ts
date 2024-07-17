import { type TodoId, type ListOfTodos, type Todo as TodoType } from "../types";
import { Todo } from "./Todo";

interface Props {
  todos: ListOfTodos;
  onCompleted: ({ id, completed }: Pick<TodoType, "id" | "completed">) => void;
  onRemoveTodo: ({ id }: TodoId) => void;
}

const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onCompleted }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onCompleted={onCompleted}
          />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
