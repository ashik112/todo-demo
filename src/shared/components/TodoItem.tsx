import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ITodo } from "../../interfaces";
import TodoEditModal from "./Modals/TodoEditModal";

const TodoItem = ({ todo }: { todo: ITodo }) => {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  return (
    <>
      <div className="d-flex justify-content-start flex-row align-items-center">
        <div className="d-flex flex-column justify-content-start text-left">
          <h2>{todo.text}</h2>
          <small>{todo?.createdAt || ""}</small>
        </div>
        <Button className="mx-2" type="button" variant="danger" size="sm">
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
