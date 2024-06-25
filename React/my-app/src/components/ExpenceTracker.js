import React, { useState } from "react";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (description && amount) {
      setExpenses([...expenses, { description, amount: parseFloat(amount) }]);
      setDescription("");
      setAmount("");
    }
  };

  const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Expense Tracker</h2>
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mr-2 p-2 border rounded w-full"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mr-2 p-2 border rounded w-24"
        />
        <button
          onClick={addExpense}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Add Expense
        </button>
      </div>
      <div>
        <h3 className="text-lg font-semibold border-b pb-2 mb-2">Expenses</h3>
        <ul className="list-none p-0">
          {expenses.map((expense, index) => (
            <li key={index} className="mb-2 flex justify-between">
              <span>{expense.description}</span>
              <span>${expense.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
      <h3 className="text-lg font-semibold border-t pt-2 mt-2">
        Total: ${totalExpense.toFixed(2)}
      </h3>
    </div>
  );
};

export default ExpenseTracker;
