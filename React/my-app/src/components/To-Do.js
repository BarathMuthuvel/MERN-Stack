import React, { useState } from "react";

const ToDo = () => {
  const [inputValues, setInputValues] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (inputValues) {
      setTodos([...todos, { text: inputValues, completed: false }]);
      setInputValues("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex item-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">ToDo List</h1>
        <div className="mb-4">
          <input
            type="text"
            value={inputValues}
            onChange={(e) => setInputValues(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button
            onClick={handleAddTodo}
            className="mt-2 bg-blue-500 text-white p-2 rounded w-full"
          >
            Add ToDo
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <div className="flex items-center justify-between p-2 border-b ">
              <div
                key={index}
                className={`${todo.completed ? "line-through" : ""}`}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(index)}
                  className="mr-2 cursor-pointer"
                />
                <span>{todo.text}</span>
              </div>
              <button
                onClick={() => deleteTodo(index)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
