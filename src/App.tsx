import React from "react";
import "./index.css";
import { AddScore } from "./features/scores/Score";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App grid place-items-center h-screen text-center">
      <header className="App-header">
        <h1 className="text-3xl font-bold">10 Pin Bowling Calculator</h1>
        <p>Click on Score after each Bowl Thrown (T1 - T10)</p>
        <AddScore />
      </header>
    </div>
  );
};

export default App;
