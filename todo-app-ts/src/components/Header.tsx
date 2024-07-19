import { useState } from "react";
import { TodoText } from "../types";

interface Props {
  saveTodo: ({ text }: TodoText) => void;
}

export const Header: React.FC<Props> = ({ saveTodo }) => {
  const [text, setText] = useState("");
  console.log(text);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.trim() === "") {
      return;
    }
    saveTodo({ text });
    setText("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        className="new-todo"
        placeholder="Que planes...?"
        value={text}
        onChange={handleChange}
        aria-label="Que planes...?"
      />
      </form>
      
    </header>
  );
};
