import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useAppDispatch } from "../../hooks";
import { ITodo } from "../../interfaces";
import { deleteTodo } from "../../redux/reducers/slices/todosSlice";
import TodoEditModal from "./Modals/TodoEditModal";

const TodoItem = ({ todo }: { todo: ITodo }) => {
  const dispatch = useAppDispatch();
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const onDelete = () => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to do this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(deleteTodo(todo)),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };
  return (
    <>
      <div className="d-flex justify-content-start flex-row align-items-center">
        <div className="d-flex flex-column justify-content-start text-left">
          <h2>{todo.text}</h2>
          <small>{todo?.createdAt || ""}</small>
        </div>
        <Button
          onClick={onDelete}
          className="mx-2"
          type="button"
          variant="danger"
          size="sm"
        >
          Delete
        </Button>
        <Button onClick={() => setShowEditModal(true)} type="button" size="sm">
          Edit
        </Button>
      </div>
      {showEditModal && (
        <TodoEditModal
          todoItem={todo}
          show={showEditModal}
          onHide={() => setShowEditModal(false)}
        />
      )}
    </>
  );
};

export default TodoItem;
