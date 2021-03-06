import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { addTodo, updateTodo } from "../../redux/reducers/slices/todosSlice";
import { useAppDispatch } from "../../hooks";
import { ITodo } from "../../interfaces";

const TodoForm = ({
  todoItem,
  onSave = () => {},
}: {
  todoItem: ITodo;
  onSave?: Function;
}) => {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useAppDispatch();
  const saveTodo = () => {
    todo && dispatch(addTodo(todo));
    setTodo("");
  };
  const editTodo = () => {
    todo &&
      dispatch(
        updateTodo({
          ...todoItem,
          text: todo,
        })
      );
    setTodo("");
    onSave();
  };
  useEffect(() => {
    setTodo(todoItem.text);
  }, [todoItem]);
  return (
    <div className="d-flex justify-content-between flex-row">
      <Form.Control
        value={todo}
        onChange={(e: any) => {
          setTodo(e.target.value);
        }}
        type="text"
        className="mx-2"
        aria-label="TODO"
        placeholder="Write TODO"
      />
      <Button onClick={todoItem.id ? editTodo : saveTodo} type="button">
        Save
      </Button>
    </div>
  );
};

export default TodoForm;
