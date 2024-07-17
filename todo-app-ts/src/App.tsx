import { useState } from "react";
import Todos from "./components/Todos";
import { type TodoId, type Todo as TodoType } from "./types";

const mockTodos = [
  {
    id: "1",
    text: "Buy milk",
    completed: false,
  },
  {
    id: "2",
    text: "Buy bread",
    completed: false,
  },
  {
    id: "3",
    text: "Buy cheese",
    completed: false,
  },
];
const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <Todos
      todos={todos}
      onRemoveTodo={handleRemove}
      onCompleted={handleCompleted}
    />
  );
};

export default App;
