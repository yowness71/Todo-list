import { useState } from "react";
import "./Form.css";

function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ title: "", description: "" });

  function submitbtn(e) {
    e.preventDefault(); 
    setTodos([...todos, todo]);
    setTodo({ title: "", description: "" });
  }

  return (
    <form className="todo-form" onSubmit={submitbtn}>
      <input
        type="text"
        value={todo.title}
        placeholder="Enter todo title"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <input
        type="text"
        value={todo.description}
        placeholder="Enter todo description"
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <button className="submitbtn" type="submit">Add</button>
    </form>
  );
}

export default Form;
