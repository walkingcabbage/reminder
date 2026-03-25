import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/todo";

function App() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");

    if (!saved) return [];

    try {
      return JSON.parse(saved);
    } catch {
      return [];
    }
  });
  const [filter, setFilter] = useState<"all" | "done" | "active">("all");
  const filteredTodos = todos.filter((todo) => {
    if (filter === "done") return todo.done;
    if (filter === "active") return !todo.done;
    return true;
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleTodoAdd = () => {
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setText("");
  };
  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div>
        <button onClick={() => setFilter("all")}>전체</button>
        <button onClick={() => setFilter("active")}>미완료</button>
        <button onClick={() => setFilter("done")}>완료</button>
      </div>
      <TodoInput text={text} setText={setText} onAddTodo={handleTodoAdd} />
      <TodoList
        todos={filteredTodos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App;
