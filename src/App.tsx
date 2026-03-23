import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/todo";

function App() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleTodoAdd = () => {
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text,
    };

    setTodos([...todos, newTodo]);
    setText("");
  };

  return (
    <>
      <TodoInput text={text} setText={setText} onAddTodo={handleTodoAdd} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
