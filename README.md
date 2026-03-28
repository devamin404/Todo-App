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

## 🧩 Component Overview

### `App.jsx`

The root component. Holds the `todos` array in state and passes down `deleteTodo` and `completeTodo` handler functions as props.

### `TodoForm.jsx`

Contains a controlled text input and an ADD button. Validates input before creating a new todo object with a unique UUID and appending it to the list.

### `Todos.jsx`

Maps over the todos array and renders an individual `<Todo />` component for each item.

### `Todo.jsx`

Displays a single todo with its title, a **Complete** button to toggle the strikethrough style, and a **Delete** button to remove it.

---

## 🎨 Design Highlights

- **Background:** Pure black (`#000000`)
- **Accent Color:** Cyan (`rgb(0, 255, 234)`)
- **Todo Cards:** Dark gray (`#333`) with rounded corners
- **Font:** Segoe UI / system sans-serif stack
- **Input:** Pill-shaped with glowing cyan focus ring

---
