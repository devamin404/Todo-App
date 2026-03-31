# Project Title

Todo App

A clean, modern, and fully responsive **Todo App** built with **React**, **CSS Modules**, and **Local Storage**, featuring a sleek dark UI with cyan accent colors, toast notifications, and haptic feedback.

🌐 **Live Demo:** [todo-app-tau-opal-20.vercel.app](https://todo-app-tau-opal-20.vercel.app/)

---

## ✨ Features

### Core Functionality

- **Add Todos** — Type a task and press Enter or click ADD button
- **Complete Todos** — Toggle tasks as done with strikethrough effect and green checkmark
- **Delete Todos** — Remove individual tasks instantly with red trash icon
- **Edit Todos** — Double-click any todo or click the pencil icon to edit inline
- **Persistent Storage** — All todos are saved to browser's Local Storage and persist across sessions

### User Experience

- **Auto Focus** — Input field automatically focuses when app loads for instant typing
- **Toast Notifications** — Beautiful error messages for invalid inputs using React Toastify
- **Haptic Feedback** — Subtle vibration on mobile devices when completing a todo
- **Double-Click to Edit** — Quick inline editing by double-clicking any todo text
- **Keyboard Shortcuts:**
  - `Enter` — Save edited todo
  - `Escape` — Cancel editing and revert changes
- **Input Validation** — Prevents adding or saving empty/whitespace-only todos

### Design & Responsiveness

- **Fully Responsive** — Optimized layouts for mobile (< 550px), tablet, and desktop
- **Mobile-First Design** — Enhanced button UIs on mobile with colored backgrounds and full-width layout
- **Smooth Transitions** — Polished hover effects and button interactions
- **Accessible Typography** — Improved letter spacing (1.5px) for better readability

---

## 🛠️ Tech Stack

- **React 19** — UI library & component architecture
- **CSS Modules** — Scoped, maintainable styling per component
- **React Hooks** — `useState`, `useEffect`, `useRef` for state & lifecycle management
- **Local Storage API** — Browser-based persistent data storage
- **React Toastify** — Toast notification library for user feedback
- **Lucide React** — Modern icon library (CircleCheck, Trash2, Pencil, Save, X icons)
- **Vite** — Lightning-fast build tool & dev server
- **`crypto.randomUUID()`** — Native browser API for unique ID generation

---

## 📁 Project Structure

```
src/
├── App.jsx                      # Root component, state management & handlers
├── App.module.css               # Root layout styles
├── index.css                    # Global reset & base styles
├── main.jsx                     # React DOM entry point
└── Components/
    ├── TodoForm.jsx             # Input form with auto-focus
    ├── TodoForm.module.css      # Form styles
    ├── Todos.jsx                # Todo list container
    ├── Todos.module.css         # List styles
    ├── Todo.jsx                 # Individual todo item with edit mode
    └── Todo.module.css          # Todo item & button styles
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/todo-app.git

# Navigate into the project directory
cd todo-app

# Install dependencies
npm install
```

### Running the App

```bash
# Start the development server
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

React's entry point that mounts the entire app into the `#root` div from `index.html`.

---

### 2. `App.jsx` — The Brain 🧠

**Single source of truth** for the entire application. Manages the `todos` state — an array of todo objects:

```js
{
  id: "a3f1c...",        // Unique UUID
  title: "Learn React",  // User's todo text
  completed: false       // Completion status
}
```

#### State Management

- **Initial State with Local Storage:**

  ```js
  const [todos, setTodos] = useState(() => {
    try {
      const data = localStorage.getItem("todos");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });
  ```

  Uses lazy initialization to load todos from Local Storage on mount, with error handling for corrupted data.

- **Persistent Storage:**
  ```js
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  ```
  Automatically saves todos to Local Storage whenever the state changes.

#### Handler Functions

- **`deleteTodo(id)`** — Filters out the todo with matching ID
- **`completeTodo(id)`** — Toggles the `completed` boolean for the matching todo
- **`updateTodo(id, newTitle)`** — Updates the `title` of the matching todo with edited text

Renders `<TodoForm />` for adding todos and `<Todos />` for displaying them.

---

### 3. `TodoForm.jsx` — Adding a Todo ➕

Manages local `title` state for controlled input. Uses `useRef` and `useEffect` to **auto-focus** the input field on component mount.

#### Flow:

1. User types → `title` state updates via `onChange`
2. User submits (Enter or ADD button) → `handleSubmit` fires
3. Validation: If empty/whitespace → Toast error appears
4. Valid input → Creates new todo object with UUID and `completed: false`
5. Appends to todos array via `setTodos`
6. Clears input field

**Toast Integration:**

```js
if (!title.trim()) {
  toast.error("Enter a valid todo!");
  return;
}
```

---

### 4. `Todos.jsx` — The List Container 📋

Receives `todos` array and handler functions as props. Maps over todos and renders a `<Todo />` component for each item, passing down all necessary props.

---

### 5. `Todo.jsx` — Individual Todo Item 🃏

**Most feature-rich component** with two local states:

- `isEditing` — Toggles between view and edit mode
- `editedTitle` — Tracks edited text in textarea

#### Features:

**Complete Button (`CircleCheck`):**

- Toggles `completed` status
- Triggers haptic feedback on mobile: `navigator.vibrate(100)`
- Icon turns green when completed
- Title gets strikethrough styling

**Delete Button (`Trash2`):**

- Calls `deleteTodo(id)` to remove todo
- Red color on hover

**Edit Mode:**

- **Trigger:** Double-click on todo text or click pencil icon
- Replaces `<p>` with `<textarea>` pre-filled with current title
- **Save:** Click Save icon or press Enter
- **Cancel:** Click X icon or press Escape
- Validation: Shows toast error for empty input

**Keyboard Shortcuts:**

```js
onKeyDown={(e) => {
  if (e.key === "Enter") {
    // Save logic
  }
  if (e.key === "Escape") {
    // Cancel logic
  }
}}
```

---

### 🔄 Complete Data Flow

```
main.jsx
  └── App.jsx
       ├── Loads todos from Local Storage on mount
       ├── Saves todos to Local Storage on every change
       ├── Manages todos state & handlers
       │
       ├── <TodoForm />
       │    └── Adds new todo → calls setTodos
       │
       └── <Todos />
            └── <Todo /> × N
                 ├── Calls deleteTodo(id)
                 ├── Calls completeTodo(id) + vibrate
                 └── Calls updateTodo(id, newTitle)
```

> **Key Concept:** Unidirectional data flow — state flows **down** via props, actions flow **up** via callback functions. Only `App.jsx` directly modifies the `todos` state.

---

## 💾 Local Storage Implementation

### Saving Strategy

- **Trigger:** `useEffect` with `[todos]` dependency
- **Action:** Stringifies and saves entire todos array on every state change
- **Key:** `"todos"`

### Loading Strategy

- **Trigger:** Lazy state initialization in `useState`
- **Action:** Parses stored JSON or returns empty array
- **Error Handling:** Returns `[]` if data is corrupted or unavailable

### Benefits

- ✅ Todos persist across browser sessions
- ✅ Works offline (no backend required)
- ✅ Instant load times
- ✅ Privacy-focused (data stays local)

---

## 🎯 User Interactions Summary

| Action               | Desktop                           | Mobile                   |
| -------------------- | --------------------------------- | ------------------------ |
| **Add Todo**         | Type + Enter / Click ADD          | Same                     |
| **Edit Todo**        | Double-click text / Click pencil  | Same                     |
| **Save Edit**        | Enter key / Click Save icon       | Same                     |
| **Cancel Edit**      | Escape key / Click X icon         | Same                     |
| **Complete Todo**    | Click CircleCheck                 | Click + Haptic vibration |
| **Delete Todo**      | Click Trash2                      | Same                     |
| **Input Focus**      | Auto-focused on load              | Same                     |
| **Validation Error** | Toast notification (bottom-right) | Same                     |

## 👨‍💻 Author

Built with ❤️ by Muhammad Amin

**Connect with me:**

- GitHub: https://github.com/devamin404/Todo-App.git
- LinkedIn: www.linkedin.com/in/muhammad-amin-989269398
- Live Demo: [todo-app-tau-opal-20.vercel.app](https://todo-app-tau-opal-20.vercel.app/)
