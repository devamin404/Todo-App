import styles from "./TodoForm.module.css";
import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";

function TodoForm({ setTodos }) {
  const [title, setTitle] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) {
      toast.error("Enter a valid todo!");
      return;
    }
    const newTodo = {
      id: crypto.randomUUID(),
      title: title.trim(),
      completed: false,
    };
    setTodos((prev) => {
      return [...prev, newTodo];
    });
    setTitle("");
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <h1 className={styles.todoHeading}>TODO APP</h1>
      <div className={styles.todoFormContainer}>
        <input
          type="text"
          className={styles.todoInput}
          placeholder="Enter your text here and press enter"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ref={inputRef}
        />
        <button className={styles.todoBtn}>ADD</button>
      </div>
    </form>
  );
}

export default TodoForm;
