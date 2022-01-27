import React from "react";
import { useAppSelector } from "../../hooks";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <ul>
        {todos.map((todoItem: any) => {
          return (
            <li key={todoItem.id}>
              <TodoItem todo={todoItem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
