import React, { useState } from "react";
import Helper from "../Helper";
import Board from "./Board";

const Game = () => {
  const [array, setArray] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);

  const [player1, setPlayer1] = useState(true);
  const winner = Helper(array[stepNumber]);
  const whoIsNext = player1 ? "X" : "O";

  const handleClick = (i) => {
    const current = array[stepNumber];
    const squares = [...current];

    // If winner or occupied square => return
    if (winner || squares[i]) return;

    // Change the player and setArray to a new value
    squares[i] = whoIsNext;
    setArray([...array, squares]);
    setStepNumber(array.length);
    setPlayer1(!player1);
  };
  const resetHanlder = () => {
    setStepNumber(0);
    setArray([Array(9).fill(null)]);
  };

  return (
    <div className="game_container">
      <button className="button_reset" onClick={resetHanlder}>
        Reset
      </button>

      <Board squares={array[stepNumber]} onClick={handleClick} />

      <h3>{winner ? "Winner: " + winner : "Next Player: " + whoIsNext}</h3>
    </div>
  );
};

export default Game;
