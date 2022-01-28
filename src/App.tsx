import React from "react";
import "./App.css";
import TodoForm from "./shared/components/TodoForm";
import TodoList from "./shared/components/TodoList";

export const  App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODOS</h1>
        <TodoForm
          todoItem={{
            id: null,
            text: "",
          }}
        />
        <div className="my-5">
          <TodoList />
        </div>
      </header>
    </div>
  );
}

export default App;
