import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        TODOS
        <input type="text" />
        <button type="button">Save</button>
        <div>
          <ul>
            <li>
              Complete assignment: Jan 26,2022 18:42
              <button type="button">Delete</button>
              <button type="button">Edit</button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
