import type { Todo } from "../types/todo";

type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <div>
      <span
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.done ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </div>
  );
}

export default TodoItem;
