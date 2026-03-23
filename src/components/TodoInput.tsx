type TodoInputProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  onAddTodo: () => void;
};

function TodoInput({ text, setText, onAddTodo }: TodoInputProps) {
  return (
    <div>
      <h1>TODO를 입력하세요!</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button onClick={onAddTodo}>확인</button>
    </div>
  );
}

export default TodoInput;
