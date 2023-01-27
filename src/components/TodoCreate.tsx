import { useState } from "react";
import { todoApi } from "../app/services/todoService";
import { ITodo } from "../types/types";

const TodoCreate = () => {
  const [createTodo] = todoApi.useCreateNewTodoMutation();

  const [todoContent, setTodoContent] = useState("");

  const handleCreate = async () => {
    await createTodo({
      title: todoContent,
      completed: false,
      userId: 1,
    } as ITodo);
    setTodoContent("");
  };

  return (
    <div className="todo-create">
      <div className="todo-create__content">
        <input
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
          placeholder="Add new"
          className="todo-create__input"
          maxLength={20}
          type="text"
        />
        <button
          onClick={handleCreate}
          className={
            todoContent.trim().length > 0
              ? "todo-create__btn todo-create__btn_active"
              : "todo-create__btn"
          }
          disabled={todoContent.trim().length <= 0}
        ></button>
      </div>
    </div>
  );
};

export default TodoCreate;
