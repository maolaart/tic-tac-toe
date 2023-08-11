import { useState } from "react";
import Square from "./Square";
import rulesWin from "../script/rulesWin";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextTurn, setNextTurn] = useState(true);

  const handleClick = (i) => {
    if (squares[i] || rulesWin(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[i] = nextTurn ? "X" : "O";
    setSquares(nextSquares);
    setNextTurn(!nextTurn);
  };

  const winner = rulesWin(squares);
  let status = "";

  if (winner) {
    status = "The Winner is " + winner;
  } else {
    status = "Next turn : " + (nextTurn ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        <Square value={squares[0]} clickSquare={() => handleClick(0)} />
        <Square value={squares[1]} clickSquare={() => handleClick(1)} />
        <Square value={squares[2]} clickSquare={() => handleClick(2)} />
        <Square value={squares[3]} clickSquare={() => handleClick(3)} />
        <Square value={squares[4]} clickSquare={() => handleClick(4)} />
        <Square value={squares[5]} clickSquare={() => handleClick(5)} />
        <Square value={squares[6]} clickSquare={() => handleClick(6)} />
        <Square value={squares[7]} clickSquare={() => handleClick(7)} />
        <Square value={squares[8]} clickSquare={() => handleClick(8)} />
      </div>
      <div>
        <button className="btn-restart" onClick={()=>setSquares(Array(9).fill(null))}>Restart</button>
      </div>
    </>
  );
};

export default Board;
