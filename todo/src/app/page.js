"use client";

import { useState } from "react";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";

const Page = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([...todos, { id: Date.now(), text: inputValue.trim(), completed: false }]);
    setInputValue("");
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-16">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-emerald-400 drop-shadow-lg">
        My Todo App
      </h1>

      <div className="w-full max-w-lg bg-slate-900 rounded-3xl shadow-2xl p-6 border border-slate-700">
        {/* Add Todo Form */}
        <AddTodoForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          addTodo={addTodo}
        />

        {/* Todo List */}
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>

      <footer className="mt-10 text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} My Todo App
      </footer>
    </div>
  );
};

export default Page;
