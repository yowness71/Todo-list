import "./TodoItem.css";
function handledelete(props) {
  const newTodos = props.todos.filter((_, i) => i !== props.index);
  props.setTodos(newTodos);
}
function TodoItem(props) {
  return (
    <div className="item">
      <div className="title">{props.todo.title}</div>
      <div className="description">{props.todo.description}</div>
      <div className="btns">
        <button className="delete" onClick={() => handledelete(props)}>
          Delete
        </button>
        <button className="edit">Edit</button>
      </div>
    </div>
  );
}
export default TodoItem;
