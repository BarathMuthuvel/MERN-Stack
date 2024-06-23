import React, { useState } from 'react'

const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
  
    return null;
  };

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
  
    const handleClick = (index) => {
      if (calculateWinner(board) || board[index]) {
        return;
      }
  
      const newBoard = [...board];
      newBoard[index] = xIsNext ? 'X' : 'O';
      setBoard(newBoard);
      setXIsNext(!xIsNext);
    };
  
    const renderSquare = (index) => {
      return (
        <button
          className="square bg-white border border-gray-300 text-4xl font-bold h-20 w-20 flex items-center justify-center focus:outline-none"
          onClick={() => handleClick(index)}
        >
          {board[index]}
        </button>
      );
    };
  
    const winner = calculateWinner(board);
    const status = winner
      ? `Winner: ${winner}`
      : `Next player: ${xIsNext ? 'X' : 'O'}`;
  
    const resetGame = () => {
      setBoard(Array(9).fill(null));
      setXIsNext(true);
    };
  
    return (
      <div className="App min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Tic Tac Toe</h1>
        <div className="board grid grid-cols-3 gap-2">
          {board.map((square, index) => (
            <div key={index} className='square-wrapper'>{renderSquare(index)}</div>
          ))}
        </div>
        <div className="status text-xl font-bold mt-4">{status}</div>
        <button
          className="reset-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>
    );
  };

export default TicTacToe