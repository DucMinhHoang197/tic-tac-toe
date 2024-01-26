import React from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square handleClick={() => handleClick(0)} value={squares[0]} />
          <Square handleClick={() => handleClick(1)} value={squares[1]} />
          <Square handleClick={() => handleClick(2)} value={squares[2]} />
        </div>
        <div className="board-row">
          <Square handleClick={() => handleClick(3)} value={squares[3]} />
          <Square handleClick={() => handleClick(4)} value={squares[4]} />
          <Square handleClick={() => handleClick(5)} value={squares[5]} />
        </div>
        <div className="board-row">
          <Square handleClick={() => handleClick(6)} value={squares[6]} />
          <Square handleClick={() => handleClick(7)} value={squares[7]} />
          <Square handleClick={() => handleClick(8)} value={squares[8]} />
        </div>
      </div>
    </div>
  );
}
