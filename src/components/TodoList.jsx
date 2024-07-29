import TodoItem from "./TodoItem";
import "./TodoList.css";
function TodoList(props) {
  return (
    <div className="list">
      {props.todos.map((item, index) => (
        <TodoItem key={index} index={index} todo={item} setTodos={props.setTodos} todos={props.todos} />
      ))}
    </div>
  );
}
export default TodoList;
