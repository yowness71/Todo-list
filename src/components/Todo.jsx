import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import "./Todo.css";
import Form from "./Form";
function Todo(props) {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <div>
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}
export default Todo;
