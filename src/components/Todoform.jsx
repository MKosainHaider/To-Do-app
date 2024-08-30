import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Input = styled.input`
  width: 75%;
  padding: 10px;
  border: 2px solid #4caf50;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #45a049;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
        required
      />
      <Button type="submit">Add Task</Button>
    </Form>
  );
}

export default TodoForm;
