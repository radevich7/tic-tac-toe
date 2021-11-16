import React from "react";
import { Fragment } from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
  return (
    <Fragment>
      <h1>Tic Tac Toe - Launchpad</h1>
      <div className="board">
        {squares.map((square, i) => (
          <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
      </div>
    </Fragment>
  );
};

export default Board;
