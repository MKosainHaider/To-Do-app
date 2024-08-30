import React, { useState } from "react";
import styled from "styled-components";

const ListItem = styled.li`
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: ${(props) => (props.completed ? "#f3f4f6" : "white")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#888" : "black")};
`;

const TaskText = styled.span`
  display: block;
  margin-bottom: 10px;
  word-wrap: break-word;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: ${(props) => props.color || "#4caf50"};
  color: ${(props) => props.textColor || "white"};
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverColor || "#45a049"};
  }
`;

function TodoItem({ todo, deleteTodo, toggleComplete, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleUpdate = () => {
    updateTodo(todo.id, newTask);
    setIsEditing(false);
  };

  return (
    <ListItem completed={todo.completed} className="flex flex-col">
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
      ) : (
        <TaskText onClick={() => toggleComplete(todo.id)}>{todo.task}</TaskText>
      )}

      <div className="flex space-x-2">
        {isEditing ? (
          <Button
            onClick={handleUpdate}
            color="#1e88e5"
            hoverColor="#1565c0"
            textColor="white"
          >
            Save
          </Button>
        ) : (
          <>
            <Button
              onClick={() => setIsEditing(true)}
              color="#fdd835"
              hoverColor="#fbc02d"
              textColor="#000"
            >
              Edit
            </Button>
            <Button
              onClick={() => deleteTodo(todo.id)}
              color="#e53935"
              hoverColor="#d32f2f"
              textColor="white"
            >
              Delete
            </Button>
            <Button
              onClick={() => toggleComplete(todo.id)}
              color={todo.completed ? "#757575" : "#4caf50"}
              hoverColor={todo.completed ? "#616161" : "#388e3c"}
              textColor="white"
            >
              {todo.completed ? "Undo" : "Complete"}
            </Button>
          </>
        )}
      </div>
    </ListItem>
  );
}

export default TodoItem;
