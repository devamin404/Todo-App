# Project Title

Todo App
A clean, responsive Todo App built with React and CSS Modules, featuring a modern dark UI with cyan accent colors.

# Todo App

A clean, responsive **Todo App** built with **React** and **CSS Modules**, featuring a modern dark UI with cyan accent colors.

🌐 **Live Demo:** [todo-app-tau-opal-20.vercel.app](https://todo-app-tau-opal-20.vercel.app/)

---

## Features

- **Add Todos** — Type a task and press Enter or click ADD
- **Complete Todos** — Toggle tasks as done with a strikethrough effect
- **Delete Todos** — Remove individual tasks instantly
- **Edit Todos** — Click the pencil icon to edit a todo inline, save with Enter or the save button, cancel with Escape or the X button
- **Auto Focus** — Input field is automatically focused when the app loads
- **Input Validation** — Prevents adding or saving empty/whitespace-only todos
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop

---

## Tech Stack

- **React 18** — UI library & component architecture
- **CSS Modules** — Scoped, maintainable styling per component
- **React Hooks (`useState`)** — Local & shared state management
- **React Hooks (`useEffect`)** — Auto-focuses input on app load
- **React Hooks (`useRef`)** — Direct DOM reference to the input field
- **`crypto.randomUUID()`** — Unique ID generation for todos
- **Lucide React** — Icon library for Complete, Delete, Edit, Save, Cancel icons
- **Vite** — Build tool & dev server

---

## 📁 Project Structure

- `src/`
  - `App.jsx` — Root component, manages todos state & all handler functions
  - `App.module.css` — Root layout styles
  - `index.css` — Global reset & base styles
  - `main.jsx` — React DOM entry point
  - `Components/`
    - `TodoForm.jsx` — Input form for adding new todos with auto-focus
    - `TodoForm.module.css` — Form styles (input, button, heading)
    - `Todos.jsx` — Renders the list of Todo items
    - `Todos.module.css` — List container styles
    - `Todo.jsx` — Individual todo item with complete, delete, and inline edit
    - `Todo.module.css` — Todo item & button styles

---

## Getting Started

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

## Component Flow & Architecture

Here is how the app works from top to bottom — follow this to understand the complete data flow.

---

### 1. `main.jsx` — Entry Point

This is where React starts. It grabs the `#root` div from `index.html` and mounts the entire app inside it by rendering `<App />`. Nothing else lives here.

---

### 2. `App.jsx` — The Brain 🧠

This is the **single source of truth** for the entire app. It owns the `todos` state — an array that holds every todo object. Each todo looks like this:

```js
{
  id: "a3f1c...",        // unique ID from crypto.randomUUID()
  title: "Learn React",  // the text the user typed
  completed: false        // toggled true/false when marked complete
}
```

`App.jsx` defines three handler functions and passes everything down as props:

- **`deleteTodo(id)`** — filters out the todo whose `id` matches, updating the state with the remaining todos.
- **`completeTodo(id)`** — maps over todos and flips the `completed` boolean for the matching todo, leaving all others unchanged.
- **`updateTodo(id, newTitle)`** — maps over todos and replaces the `title` of the matching todo with the new edited title.

It renders two child components: `<TodoForm />` to add new todos, and `<Todos />` to display them.

---

### 3. `TodoForm.jsx` — Adding a Todo ➕

This component manages its own local `title` state for the input field (controlled input). It also uses `useRef` and `useEffect` together to **automatically focus** the input when the app first loads — so the user can start typing immediately without clicking.

Here is what happens when a user submits:

1. User types in the input field → `title` state updates on every keystroke via `onChange`
2. User clicks **ADD** or presses **Enter** → `handleSubmit` fires
3. If the input is empty or only spaces → an alert is shown and nothing is added
4. If valid → a new todo object is created with a unique UUID and `completed: false`
5. The new todo is appended to the existing list via `setTodos` (received as a prop from `App.jsx`)
6. The input field is cleared back to an empty string

---

### 4. `Todos.jsx` — The List Container 📋

This component receives the `todos` array and all three handler functions as props. It loops over every todo using `.map()` and renders a `<Todo />` component for each one, passing down `deleteTodo`, `completeTodo`, and `updateTodo`.

---

### 5. `Todo.jsx` — A Single Todo Card 🃏

This is the most feature-rich component in the app. It manages two pieces of its own local state:

- **`isEditing`** — toggles between view mode and edit mode
- **`editedTitle`** — tracks the text inside the edit input field

Here is what each action does:

- **Complete button (`CircleCheck` icon)** → calls `completeTodo(id)`, flips `completed` to `true` or `false`. When `true`, a strikethrough CSS class is applied to the title. The button turns green when the todo is completed.
- **Delete button (`Trash2` icon)** → calls `deleteTodo(id)`, removes this todo from state entirely. Turns red on hover.
- **Edit button (`Pencil` icon)** → sets `isEditing` to `true`, which replaces the `<p>` title with an inline `<input>` field pre-filled with the current title.
- **Save button (`Save` icon)** → validates the edited text, calls `updateTodo(id, editedTitle)` to save the new title up to `App.jsx`, then exits edit mode.
- **Cancel button (`X` icon)** → resets `editedTitle` back to the original title and exits edit mode without saving.
- **Keyboard shortcuts in edit mode:**
  - `Enter` → saves the todo (same as Save button)
  - `Escape` → cancels the edit (same as Cancel button)

---

### 🔄 Full Data Flow Summary

```
main.jsx
  └── App.jsx  (owns todos state → deleteTodo, completeTodo, updateTodo)
        ├── TodoForm.jsx  (adds new todo → calls setTodos)
        └── Todos.jsx     (receives todos array)
              └── Todo.jsx × N  (calls deleteTodo, completeTodo, or updateTodo)
```

> **Key concept:** Data flows **down** via props, and actions flow **up** via callback functions. `App.jsx` is the only component that directly modifies the `todos` state.

---

## Design Highlights

- **Background:** Pure black (`#000000`)
- **Accent Color:** Cyan (`rgb(0, 255, 234)`)
- **Todo Cards:** Dark (`#1a1a1a`) with rounded corners
- **Font:** Segoe UI / system sans-serif stack
- **Input:** Pill-shaped with glowing cyan focus ring
- **Icons:** Lucide React — minimal and consistent

---
