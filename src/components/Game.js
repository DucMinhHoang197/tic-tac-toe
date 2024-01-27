import React, { useState, useEffect } from "react";
import Board from "./Board";
// import { useDeepCompareEffect } from "react-use";
function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  // Declaring a Winner
  useEffect(() => {
    const newWinner = calculateWinner(squares);
    setWinner(newWinner);
    console.log(newWinner, "2");
  }, [squares]);
  console.log(squares);
  // useDeepCompareEffect(() => {
  //   const newWinner = calculateWinner(squares);
  //   setWinner(newWinner);
  // }, [squares]);
  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (i) => {
    let xo = [...squares];
    if (calculateWinner(xo) || xo[i]) {
      return;
    }
    xo[i] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setSquares(xo);

    console.log(i);
    console.log(xo);
  };

  //Restart game
  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <div className="game">
        <span className="player">Next player is: {xIsNext ? "X" : "O"}</span>
        <Board squares={squares} handleClick={handleClick} />
      </div>
      <button onClick={handleRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;
