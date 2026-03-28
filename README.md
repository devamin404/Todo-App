# Project Todo App

A clean, responsive **Todo App** built with **React** and **CSS Modules**, featuring a modern dark UI with cyan accent colors.

---

## Features

- **Add Todos** — Type a task and press Enter or click ADD
- **Complete Todos** — Toggle tasks as done with a strikethrough effect
- **Delete Todos** — Remove individual tasks instantly
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop
- **Input Validation** — Prevents adding empty or whitespace-only todos

---

## Tech Stack

- **React 18** — UI library & component architecture
- **CSS Modules** — Scoped, maintainable styling
- **React Hooks (`useState`)** — Local state management
- **`crypto.randomUUID()`** — Unique ID generation for todos
- **Vite** — Build tool & dev server

---

## Project Structure

- `src/`
  - `App.jsx` — Root component, manages todos state & handlers
  - `App.module.css` — Root layout styles
  - `index.css` — Global reset & base styles
  - `main.jsx` — React DOM entry point
  - `Components/`
    - `TodoForm.jsx` — Input form for adding new todos
    - `TodoForm.module.css` — Form styles (input, button, heading)
    - `Todos.jsx` — Renders the list of Todo items
    - `Todos.module.css` — List container styles
    - `Todo.jsx` — Individual todo item (complete/delete)
    - `Todo.module.css` — Todo item styles

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

## 🧩 Component Flow & Architecture

Here is how the app works from top to bottom — follow this to understand the complete data flow.

---

### 1. `main.jsx` — Entry Point

This is where React starts. It grabs the `#root` div from `index.html` and mounts the entire app inside it by rendering `<App />`. Nothing else lives here.

---

### 2. `App.jsx` — The Brain 🧠

This is the **single source of truth** for the entire app. It owns the `todos` state — an array that holds every todo object. Each todo looks like this:

```js
{
  id: "a3f1c...",       // unique ID from crypto.randomUUID()
  title: "Learn React", // the text the user typed
  completed: false       // toggled true/false when marked complete
}
` ``

`App.jsx` also defines two handler functions and passes everything down as props:

- **`deleteTodo(id)`** — filters out the todo whose `id` matches, updating the state with the remaining todos.
- **`completeTodo(id)`** — maps over todos and flips the `completed` boolean for the matching todo, leaving all others unchanged.

It renders two child components: `<TodoForm />` to add new todos, and `<Todos />` to display them.

---

### 3. `TodoForm.jsx` — Adding a Todo ➕

This component manages its own local `title` state for the input field (controlled input). Here is what happens when a user submits:

1. User types in the input field → `title` state updates on every keystroke via `onChange`
2. User clicks **ADD** or presses **Enter** → `handleSubmit` fires
3. If the input is empty or only spaces → an alert is shown and nothing is added
4. If valid → a new todo object is created with a unique UUID and `completed: false`
5. The new todo is appended to the existing list via `setTodos` (received as a prop from `App.jsx`)
6. The input field is cleared back to an empty string

---

### 4. `Todos.jsx` — The List Container 📋

This component receives the `todos` array and both handler functions as props. It simply loops over every todo using `.map()` and renders a `<Todo />` component for each one. It passes along `deleteTodo` and `completeTodo` so each individual todo card can trigger them.

---

### 5. `Todo.jsx` — A Single Todo Card 🃏

This is the smallest unit of the app — one todo row. It receives a single todo's `title`, `id`, and `completed` status as props. Here is what each button does:

- **Complete button** → calls `completeTodo(id)`, which goes back up to `App.jsx` and flips `completed` to `true` or `false`. When `completed` is `true`, a CSS class is applied that adds a strikethrough to the title.
- **Delete button** → calls `deleteTodo(id)`, which goes back up to `App.jsx` and removes this todo from the state array entirely, causing it to disappear from the UI.

---

### 🔄 Full Data Flow Summary
```

```

main.jsx
└── App.jsx (owns todos state, deleteTodo, completeTodo)
├── TodoForm.jsx (adds new todo → calls setTodos)
└── Todos.jsx (receives todos array)
└── Todo.jsx × N (each card calls deleteTodo or completeTodo)
` ``

> **Key concept:** Data flows **down** via props, and actions flow **up** via callback functions. `App.jsx` is the only component that directly modifies the `todos` state.

```

> ⚠️ **Note:** Remove the space in ` `` ` — I had to add it so it didn't break the formatting here in chat. Both occurrences should be ` ``` ` with no space.

## 🎨 Design Highlights

- **Background:** Pure black (`#000000`)
- **Accent Color:** Cyan (`rgb(0, 255, 234)`)
- **Todo Cards:** Dark gray (`#333`) with rounded corners
- **Font:** Segoe UI / system sans-serif stack
- **Input:** Pill-shaped with glowing cyan focus ring

---

```

```
