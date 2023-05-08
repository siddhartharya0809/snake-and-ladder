import React from "react";
import Cell from "./Cell";
import "../style/Board.css";

const Board = ({ players }) => {
  // Define the layout of the board
  const cells = [];

  // Define the locations of the snakes and ladders
  const snakes = [
    { head: 27, tail: 7 },
    { head: 40, tail: 3 },
    { head: 43, tail: 18 },
    { head: 54, tail: 31 },
    { head: 66, tail: 45 },
    { head: 76, tail: 58 },
    { head: 89, tail: 53 },
    { head: 99, tail: 41 },
  ];
  const ladders = [
    { start: 4, end: 14 },
    { start: 9, end: 31 },
    { start: 20, end: 38 },
    { start: 28, end: 84 },
    { start: 40, end: 59 },
    { start: 63, end: 81 },
    { start: 71, end: 91 },
  ];

  for (let row = 9; row >= 0; row--) {
    const isEvenRow = row % 2 === 0;
    // const start = isEvenRow ?row * 10 +1 : (row+1)

    for (let col = 0; col < 10; col++) {
      const cellNumber = isEvenRow ? row * 10 + col + 1 : row * 10 + 10 - col;
      const player = players.find((p) => p.position === cellNumber);

      // Check if the current cell is the head of a snake
      const snake = snakes.find((s) => s.head === cellNumber);
      if (snake) {
        cells.push(
          <div key={`snake-${snake.head}`} className="snake-head"></div>
        );
      }

      // Check if the current cell is the tail of a snake
      const snakeTail = snakes.find((s) => s.tail === cellNumber);
      if (snakeTail) {
        cells.push(
          <div key={`snake-${snakeTail.tail}`} className="snake-tail"></div>
        );
      }

      // Check if the current cell is the top of a ladder
      const ladderTop = ladders.find((l) => l.end === cellNumber);
      if (ladderTop) {
        cells.push(
          <div key={`ladder-${ladderTop.end}`} className="ladder-top"></div>
        );
      }

      // Check if the current cell is the bottom of a ladder
      const ladderBottom = ladders.find((l) => l.start === cellNumber);
      if (ladderBottom) {
        cells.push(
          <div
            key={`ladder-${ladderBottom.start}`}
            className="ladder-bottom"
          ></div>
        );
      }

      cells.push(<Cell key={cellNumber} number={cellNumber} player={player} />);
    }
  }

  return (
    <div className="board-container">
      <div className="board">{cells}</div>
    </div>
  );
};

export default Board;
