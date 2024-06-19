import React from "react";
import "./App.css";
import TicTacToe from "./components/tic-tac-toe/Tic-Tac-Toe";
import ToDo from "./components/ToDo/To-Do";
import T9Keyboard from "./components/T9Keyboard/T9Keyboard";
import Billboard from "./components/BillBoard/BillBoard.js";
import TwoWayBindingExample from "./components/TwoWayDataBinding/TwoWayDataBinding.js";
import QuizApp from "./components/QuizApp/QuizApp.js";

function App() {
  return (
    <div>
      <TicTacToe />
      {/* <ToDo /> */}
      {/* <T9Keyboard /> */}
      {/* <Billboard /> */}
      {/* <TwoWayBindingExample /> */}
      {/* <QuizApp /> */}
    </div>
  );
}

export default App;
