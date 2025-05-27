import { useState } from 'react';
import Square from './Square';
import calculateWinner from './calculateWinner';
import '../App.css';

export default function Board() {
    // State for the board squares
    const [squares, setSquares] = useState(Array(9).fill(null));
    // State to track whose turn it is
    const [xIsNext, setXIsNext] = useState(true);
    // State to track X's move history (indices)
    const [xMoves, setXMoves] = useState([]);
    // State to track O's move history (indices)
    const [oMoves, setOMoves] = useState([]);
    // State to track which square is temporarily blocked
    const [blockedIndex, setBlockedIndex] = useState(null);

    // Handles a click on a square
    function handleClick(i) {
        // Prevent move if square is filled, game is over, or square is blocked
        if (squares[i] || calculateWinner(squares) || blockedIndex === i) {
            return;
        }

        // Copy current state
        const nextSquares = squares.slice();
        let nextXMoves = [...xMoves];
        let nextOMoves = [...oMoves];
        let newBlockedIndex = null;

        if (xIsNext) {
            // If X already has 3 marks, remove the oldest before placing new one
            if (nextXMoves.length === 3) {
                const oldest = nextXMoves.shift();
                nextSquares[oldest] = null;
                newBlockedIndex = oldest; // Block this square for one turn
            }
            nextSquares[i] = 'X';
            nextXMoves.push(i);
        } else {
            // If O already has 3 marks, remove the oldest before placing new one
            if (nextOMoves.length === 3) {
                const oldest = nextOMoves.shift();
                nextSquares[oldest] = null;
                newBlockedIndex = oldest; // Block this square for one turn
            }
            nextSquares[i] = 'O';
            nextOMoves.push(i);
        }

        // Update all state
        setSquares(nextSquares);
        setXMoves(nextXMoves);
        setOMoves(nextOMoves);
        setXIsNext(!xIsNext);
        setBlockedIndex(newBlockedIndex);
    }

    // Resets the game to initial state
    function handleReset() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
        setXMoves([]);
        setOMoves([]);
        setBlockedIndex(null);
    }

    // Get winner info and winning line if any
    const winnerInfo = calculateWinner(squares);
    const winner = winnerInfo ? winnerInfo.winner : null;
    const winningLine = winnerInfo ? winnerInfo.line : [];

    // Status message for the UI
    let status;
    if (winner) {
        status = "Winner: " + winner;
    }  else {
        status = (xIsNext ? "X" : "O") + "'s Turn";
    }

    // Game over if there's a winner or the board is full
    const gameOver = winner || squares.every(Boolean);

    return (
        <div className="game-container">
            <div className="status">{status}</div>
            <div className="board">
                <div className="board-row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} highlight={winningLine.includes(0)} disabled={blockedIndex === 0} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} highlight={winningLine.includes(1)} disabled={blockedIndex === 1} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} highlight={winningLine.includes(2)} disabled={blockedIndex === 2} />
                </div>
                <div className="board-row">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} highlight={winningLine.includes(3)} disabled={blockedIndex === 3} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} highlight={winningLine.includes(4)} disabled={blockedIndex === 4} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} highlight={winningLine.includes(5)} disabled={blockedIndex === 5} />
                </div>
                <div className="board-row">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} highlight={winningLine.includes(6)} disabled={blockedIndex === 6} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} highlight={winningLine.includes(7)} disabled={blockedIndex === 7} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} highlight={winningLine.includes(8)} disabled={blockedIndex === 8} />
                </div>
            </div>
            {gameOver && (
                <button className="reset-btn" onClick={handleReset}>
                    Reset Game
                </button>
            )}
        </div>
    );
}