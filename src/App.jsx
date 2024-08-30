import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f9f9f9; /* Light background color */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 320px; /* Slightly wider to accommodate text and buttons */
  text-align: center;
  margin: 0 auto;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 2rem; /* Increased font size for the title */
  margin-bottom: 20px;
  color: #333; /* Darker color for better contrast */
`;

function App() {
  const [todos, setTodos] = useState(getItemsFromLocalStorage("todoItems"));

  useEffect(() => {
    setItemsToLocalStorage("todoItems", todos);
  }, [todos]);

  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const updateTodo = (id, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <Container>
      <Title>To-Do List</Title>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        updateTodo={updateTodo}
      />
    </Container>
  );
}

export default App;

function getItemsFromLocalStorage(key) {
  const items = localStorage.getItem(key);
  return items ? JSON.parse(items) : [];
}

function setItemsToLocalStorage(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}
