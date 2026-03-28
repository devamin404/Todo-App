import styles from "./Todo.module.css";

function Todo({ title, id, completed, deleteTodo, completeTodo }) {
  return (
    <div className={styles.todoContainer}>
      <button className={styles.completeBtn} onClick={() => completeTodo(id)}>
        Complete
      </button>
      <p className={completed ? styles.completed : ""}>{title}</p>
      <button className={styles.deleteBtn} onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </div>
  );
}

export default Todo;
