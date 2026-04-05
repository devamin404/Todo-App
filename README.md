# Todo App

A React todo application built with CSS Modules and local storage. The app uses a dark UI with cyan accents, supports inline editing, filtering, completion tracking, stats, toast validation, and responsive mobile behavior.

🌐 **Live Demo:** [todo-app-tau-opal-20.vercel.app](https://todo-app-tau-opal-20.vercel.app/)

---

## ✨ Features

### Core Functionality

- **Add Todos** — Type a task and click ADD to create a new todo.
- **Complete Todos** — Toggle a todo as complete with the CircleCheck button.
- **Delete Todos** — Remove a todo with the trash button.
- **Edit Todos** — Double-click a todo or click the pencil icon to edit inline.
- **Filter Todos** — View all, completed, or pending todos with the dropdown filter.
- **Persistent Storage** — Todos are saved in browser local storage under the `todos` key.

### User Experience

- **Auto Focus** — The input focuses automatically when the app loads.
- **Validation Toasts** — Empty or whitespace-only todos show an error toast.
- **Inline Edit Controls** — Save with the check button or Enter, cancel with X or Escape.
- **Mobile Vibration** — Completing a todo triggers `navigator.vibrate(100)` when supported.
- **Empty States** — The list shows specific messages when there are no todos, completed todos, or pending todos.

### Stats and Progress

- **Total Todos** — Displays the total number of todos.
- **Completed Count** — Shows how many todos are done.
- **Pending Count** — Shows how many todos still need attention.
- **Progress Bar** — Visualizes completion percentage.

### Design & Responsiveness

- **Dark Theme** — Uses a dark background with cyan accent color.
- **Responsive Layout** — Adapts to smaller screens with stacked layouts and full-width controls.
- **Readable Todo Text** — Todo text uses wider letter spacing and wraps cleanly.
- **Mobile-Friendly Actions** — Buttons become larger and easier to tap on narrow screens.

---

## 🛠️ Tech Stack

- **React 19** — UI library and component model.
- **Vite** — Development server and production build tool.
- **CSS Modules** — Scoped styles for each component.
- **React Hooks** — `useState`, `useEffect`, and `useRef`.
- **Local Storage API** — Saves todos in the browser.
- **React Toastify** — Displays validation toasts.
- **Lucide React** — Provides the icons used in the UI.
- **`crypto.randomUUID()`** — Generates unique IDs for new todos.

---

## 📁 Project Structure

```text
src/
├── App.jsx                  # Root component, todo state, filtering, persistence
├── App.module.css           # Main layout styles
├── index.css                # Global reset and base styles
├── main.jsx                 # React entry point
└── Components/
    ├── TodoForm.jsx         # Add-todo form with auto focus and validation
    ├── TodoForm.module.css  # Form styles
    ├── Stats.jsx            # Totals, counts, and progress bar
    ├── Stats.module.css     # Stats section styles
    ├── Filter.jsx           # All / completed / pending selector
    ├── Filter.module.css    # Filter section styles
    ├── Todos.jsx            # Empty states and todo list container
    ├── Todos.module.css     # List styles
    ├── Todo.jsx             # Single todo item with edit, complete, delete
    └── Todo.module.css      # Todo item styles
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm

### Installation

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
npm install
```

### Running the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

---

## 🏗️ Component Architecture & Data Flow

### 1. `main.jsx` — Entry Point

The app is mounted into the `#root` element from `index.html`.

### 2. `App.jsx` — State Owner

`App.jsx` keeps the main todo state and the active filter. It also handles persistence to local storage.

Each todo object has this shape:

```js
{
  id: "a3f1c...",
  title: "Learn React",
  completed: false,
}
```

#### State Management

- **Todo loading** — `useState` lazily reads and parses `localStorage.getItem("todos")`.
- **Todo saving** — `useEffect` writes the full todo array back to local storage whenever it changes.
- **Filtering** — The active filter is stored in state and used to derive `filteredTodos`.

#### Handler Functions

- **`deleteTodo(id)`** — Removes a todo by ID.
- **`completeTodo(id)`** — Toggles the `completed` flag.
- **`updateTodo(id, newTitle)`** — Updates the todo title after editing.

### 3. `TodoForm.jsx` — Adding Todos

This component manages the controlled input for creating todos.

Flow:

1. The input focuses automatically on mount.
2. The user types a todo title.
3. Submitting the form validates the text.
4. Valid input creates a new todo with `crypto.randomUUID()`.
5. The new todo is appended to state through `setTodos`.
6. The input is cleared after submit.

If the input is empty or whitespace-only, the app shows a toast error and does not add the todo.

### 4. `Stats.jsx` — Counts and Progress

This component calculates total, completed, and pending todo counts from the todo array and displays a progress bar based on completion percentage.

### 5. `Filter.jsx` — Status Filtering

This component lets the user switch between `all`, `completed`, and `pending` todos.

### 6. `Todos.jsx` — List and Empty States

This component renders the filtered list and shows context-aware empty-state messages when there are no todos for the selected view.

### 7. `Todo.jsx` — Single Todo Item

Each todo item supports:

- completion toggling
- deletion
- inline editing through a textarea
- saving edits with Enter or the save button
- canceling edits with Escape or the X button

When a todo is completed, the app also triggers mobile vibration if the browser supports it.

---

## 💾 Local Storage

### Saving

- Todos are saved after every change through a `useEffect` in `App.jsx`.
- The full array is stringified and stored under the `todos` key.

### Loading

- Todos are loaded once during the initial state setup.
- If parsing fails or storage is unavailable, the app falls back to an empty array.

### Why It Helps

- Todos survive page reloads and browser restarts.
- The app works without a backend.
- Data stays on the user’s device.

---

## 🎯 User Interactions Summary

| Action            | Behavior                                             |
| ----------------- | ---------------------------------------------------- |
| **Add Todo**      | Type a title and click ADD.                          |
| **Edit Todo**     | Double-click the text or click the pencil icon.      |
| **Save Edit**     | Press Enter or click the save button.                |
| **Cancel Edit**   | Press Escape or click the X button.                  |
| **Complete Todo** | Click the CircleCheck button.                        |
| **Delete Todo**   | Click the trash button.                              |
| **Filter Todos**  | Choose All, Completed, or Pending from the dropdown. |
| **Validation**    | Empty input shows a toast error.                     |

## 👨‍💻 Author

Built with ❤️ by Muhammad Amin.

**Connect with me:**

- GitHub: https://github.com/devamin404/Todo-App.git
- LinkedIn: www.linkedin.com/in/muhammad-amin-989269398
- Live Demo: [todo-app-tau-opal-20.vercel.app](https://todo-app-tau-opal-20.vercel.app/)
