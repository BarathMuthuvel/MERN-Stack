import React from "react";
import "./App.css";
import TicTacToe from "./components/tic-tac-toe/Tic-Tac-Toe";
import ToDo from "./components/To-Do";
import T9Keyboard from "./components/T9Keyboard/T9Keyboard";
import Billboard from "./components/BillBoard/BillBoard.js";
import TwoWayBindingExample from "./components/TwoWayDataBinding/TwoWayDataBinding.js";
import QuizApp from "./components/QuizApp";
import ShowMoreProducts from "./components/ShowMoreProducts.js";

function App() {
  return (
    <div>
      <ShowMoreProducts />
      {/* <TicTacToe /> */}
      {/* <ToDo /> */}
      {/* <T9Keyboard /> */}
      {/* <Billboard /> */}
      {/* <TwoWayBindingExample /> */}
      {/* <QuizApp /> */}
    </div>
  );
}

export default App;
