import React from "react";
import { Modal } from "react-bootstrap";
import TodoForm from "../TodoForm";

const TodoEditModal = ({ todoItem, show = false, onHide }: any) => {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Update TODO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TodoForm todoItem={todoItem} onSave={onHide} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TodoEditModal;
