import { FC, FormEvent, useState } from "react";
import { todoApi } from "../app/services/todoService";
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo,
}

const TodoItem:FC<TodoItemProps> = ({todo}) => {

  const [updateTodo, {}] = todoApi.useUpdateTodoMutation();
  const [isOpen, setIsOpen] = useState(false);

  const handleDone = async(e: FormEvent<HTMLInputElement>, todo: ITodo) => {
    await updateTodo({...todo, completed: !todo.completed});
  }

  const handleOpen = (e: FormEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsOpen(prev => !prev)
  }

  return (
    <li onClick={(e) => handleOpen(e)} className="app__item">
      <div className="app__item-content">
        <div onClick={(e) => e.stopPropagation()}>
          <label className="app__item-checkbox">
            <input onClick={(e) => handleDone(e, todo)} defaultChecked={todo.completed} className="app__item-checkbox-input" type="checkbox"/>
            <span className="app__item-checkbox-span"></span>
          </label>
        </div>
        <h3 className={!todo.completed ? 'app__item-heading' : 'app__item-heading app__item-heading_active'}>{todo.title}</h3>
      </div>
      <div className={isOpen ? 'app__item-options app__item-options_active' : 'app__item-options'}>
        <button className="app__item-delete">Delete todo</button>
        <button className="app__item-edit">Edit todo</button>
      </div>
    </li>
  )
}

export default TodoItem;