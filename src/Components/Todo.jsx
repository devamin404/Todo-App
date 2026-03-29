import { useState } from "react";
import styles from "./Todo.module.css";
import { Trash2, CircleCheck, Pencil, Save, X } from "lucide-react";

function Todo({ title, id, completed, deleteTodo, completeTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  return (
    <div className={styles.todoContainer}>
      {isEditing ? (
        <input
          type="text"
          className={styles.editedTodo}
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (!editedTitle.trim()) {
                alert("Enter a valid todo!");
                return;
              }
              updateTodo(id, editedTitle);
              setIsEditing(false);
            }

            if (e.key === "Escape") {
              setIsEditing(false);
              setEditedTitle(title);
            }
          }}
        />
      ) : (
        <p className={completed ? styles.completed : ""}>{title}</p>
      )}

      <div className={styles.btnContainer}>
        {!isEditing && (
          <button
            className={completed ? styles.checked : styles.completeBtn}
            onClick={() => completeTodo(id)}
          >
            <CircleCheck />
          </button>
        )}

        {!isEditing && (
          <button className={styles.deleteBtn} onClick={() => deleteTodo(id)}>
            <Trash2 />
          </button>
        )}

        {isEditing && (
          <button
            className={styles.cancelBtn}
            onClick={() => {
              setIsEditing(false);
              setEditedTitle(title);
            }}
          >
            <X color="#C40E0E" />
          </button>
        )}

        {isEditing ? (
          <button
            className={styles.saveBtn}
            onClick={() => {
              if (!editedTitle.trim()) {
                alert("Enter a valid todo!");
                return;
              }
              updateTodo(id, editedTitle);
              setIsEditing(false);
            }}
          >
            <Save color="lightgreen" />
          </button>
        ) : (
          <button className={styles.editBtn} onClick={() => setIsEditing(true)}>
            <Pencil />
          </button>
        )}
      </div>
    </div>
  );
}

export default Todo;
