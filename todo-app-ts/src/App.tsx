import { useState } from "react";
import Todos from "./components/Todos";
import { FilterValue, TodoText, type TodoId, type Todo as TodoType } from "./types";
import { TODO_FILTERS } from "./consts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL);

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

  const handleFilter = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };

  const handleClearCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos
    .filter((todo) => {
      if (filterSelected === TODO_FILTERS.ALL) {
        return true;
      }
      return filterSelected === TODO_FILTERS.ACTIVE
        ? !todo.completed
        : todo.completed;
    });

  const handleAddTodo = ({text}: TodoText): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

    

  return (
    <div>
      <Header saveTodo={handleAddTodo}/>
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onCompleted={handleCompleted}
      />
      <Footer 
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleClearCompleted}
        handleFilterChange={handleFilter}
      />
    </div>
  );
};

export default App;
