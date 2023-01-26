import { FC } from "react";
import { todoApi } from "../app/services/todoService";
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo,
}

const TodoItem:FC<TodoItemProps> = ({todo}) => {

  const [updateTodo, {}] = todoApi.useUpdateTodoMutation();

  const handleDone = async(todo: ITodo) => {
    await updateTodo({...todo, completed: !todo.completed});
  }

  return (
    <li className="app__item">
      <div className="app__item-content">
        <div>
          <label className="app__item-checkbox">
            <input onClick={(e) => handleDone(todo)} defaultChecked={todo.completed} className="app__item-checkbox-input" type="checkbox"/>
            <span className="app__item-checkbox-span"></span>
          </label>
        </div>
        <h3 
          className={!todo.completed ? 'app__item-heading' : 'app__item-heading app__item-heading_active'}>{todo.title}</h3>
      </div>
    </li>
  )
}

export default TodoItem;