import { FC, FormEvent, useState } from "react";
import { todoApi } from "../app/services/todoService";
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo,
}

const TodoItem:FC<TodoItemProps> = ({todo}) => {

  const [updateTodo] = todoApi.useUpdateTodoMutation();
  const [updatTitle] = todoApi.useChangeTodoTitleMutation();
  const [deleteTodo] = todoApi.useDeleteTodoMutation();

  const [isOpen, setIsOpen] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title || '');

  const handleDone = async(todo: ITodo) => {
    await updateTodo({...todo, completed: !todo.completed});
  }

  const handleDelete = async() => {
    await deleteTodo(todo);
  }

  const handleOpen = (e: FormEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsOpen(prev => !prev)
  }

  const handleEdit = (e: FormEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isEditable) {
      setEditTitle(editTitle.trim());
      updatTitle({...todo, title: editTitle});
    }
    setIsEditable(prev => !prev);
  }

  return (
    <li onClick={(e) => handleOpen(e)} className="app__item">
      <div className="app__item-content">
        <div onClick={(e) => e.stopPropagation()}>
          <label className="app__item-checkbox">
            <input onClick={() => handleDone(todo)} defaultChecked={todo.completed} className="app__item-checkbox-input" type="checkbox"/>
            <span className="app__item-checkbox-span"></span>
          </label>
        </div>
        {isEditable
        ? <input maxLength={25} onClick={(e) => e.stopPropagation()} onChange={(e) => setEditTitle(e.target.value)} value={editTitle} className="app__item-edit-input" type="text"/>
        : <h3 className={!todo.completed ? 'app__item-heading' : 'app__item-heading app__item-heading_active'}>{todo.title}</h3>
        }
      </div>
      <div className={isOpen ? 'app__item-options app__item-options_active' : 'app__item-options'}>
        <button onClick={handleDelete} className="app__item-delete">Delete todo</button>
        {isEditable
        ? <button onClick={(e) => handleEdit(e)} className="app__item-edit">Confirm</button>
        : <button onClick={(e) => handleEdit(e)} className="app__item-edit">Edit todo</button>
        }
      </div>
    </li>
  )
}

export default TodoItem;