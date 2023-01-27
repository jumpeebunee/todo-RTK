import TodoItem from "./TodoItem"
import { todoApi } from "../app/services/todoService";

const TodoList = () => {

  const {data: todo} = todoApi.useFetchAllTodosQuery('');

  return (
    <ul className="app__list">
      {todo && todo.map(todo => 
        <TodoItem 
          todo={todo}
          key={todo.id}
        />
      )} 
    </ul>
  )
}

export default TodoList