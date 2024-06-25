import React, { useState } from "react";
import "./App.css";
import TicTacToe from "./components/tic-tac-toe/Tic-Tac-Toe";
import ToDo from "./components/To-Do";
import T9Keyboard from "./components/T9Keyboard/T9Keyboard";
import Billboard from "./components/BillBoard/BillBoard.js";
import TwoWayBindingExample from "./components/TwoWayDataBinding/TwoWayDataBinding.js";
import QuizApp from "./components/QuizApp";
import ShowMoreProducts from "./components/ShowMoreProducts.js";
import TreeNavMenu from "./components/TreeNavMenu.js";
import ExpenseTracker from "./components/ExpenceTracker.js";

const menuData = [
  {
    title: "Home",
  },
  {
    title: "About",
    children: [
      {
        title: "Team",
      },
      {
        title: "Company",
        children: [
          {
            title: "Mission",
          },
          {
            title: "Vision",
          },
        ],
      },
    ],
  },
  {
    title: "Services",
    children: [
      {
        title: "Consulting",
      },
      {
        title: "Development",
        children: [
          {
            title: "Web Development",
          },
          {
            title: "Mobile Development",
            children: [
              {
                title: "iOS",
              },
              {
                title: "Android",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Contact",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'} h-svh`}>
        {/* <button onClick={toggleDarkMode} className="mb-4 p-2 bg-gray-200 dark:bg-gray-700 rounded">
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button> */}
        {/* <TreeNavMenu data={menuData} /> */}
        {/* <ShowMoreProducts /> */} 
        {/* <TicTacToe /> */}
        {/* <ToDo /> */}
        {/* <T9Keyboard /> */}
        {/* <Billboard /> */}
        {/* <TwoWayBindingExample /> */}
        {/* <QuizApp /> */}
        <ExpenseTracker />
    </div>
  );
}

export default App;
