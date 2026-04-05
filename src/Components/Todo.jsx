import { useState } from "react";
import styles from "./Todo.module.css";
import { Trash2, CircleCheck, Pencil, Save, X } from "lucide-react";
import { toast } from "react-toastify";

function Todo({ title, id, completed, deleteTodo, completeTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  return (
    <div className={styles.todoContainer}>
      {isEditing ? (
        <textarea
          className={styles.editedTodo}
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (!editedTitle.trim()) {
                toast.error("Enter a valid todo!");
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
        <p
          className={completed ? styles.completed : ""}
          onDoubleClick={() => {
            setIsEditing(true);
          }}
        >
          {title}
        </p>
      )}

      <div className={styles.btnContainer}>
        {!isEditing && (
          <button
            className={completed ? styles.checked : styles.completeBtn}
            onClick={() => {
              completeTodo(id);
              if (navigator.vibrate) {
                navigator.vibrate(100);
              }
            }}
          >
            <CircleCheck color="#75e775" />
          </button>
        )}

        {!isEditing && (
          <button className={styles.deleteBtn} onClick={() => deleteTodo(id)}>
            <Trash2 color="#C40E0E" />
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
            <X color="#C40E0E" size={30} />
          </button>
        )}

        {isEditing ? (
          <button
            className={styles.saveBtn}
            onClick={() => {
              if (!editedTitle.trim()) {
                toast.error("Enter a valid todo!");
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
            <Pencil color="#ccc" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Todo;
