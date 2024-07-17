import { TodoId, type Todo as TodoType } from "../types";

interface Props extends TodoType {
  onCompleted: ({ id, completed }: Pick<TodoType, "id" | "completed">) => void;
  onRemoveTodo: ({id}:TodoId) => void;
}

export const Todo: React.FC<Props> = ({ id, text, completed, onRemoveTodo, onCompleted }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={(event) => {
          onCompleted( { id, completed: event.target.checked } );
        }}
      />
      <label>{text}</label>
      <button className="destroy" onClick={() => onRemoveTodo({id})}>X</button>
    </div>
  );
};
