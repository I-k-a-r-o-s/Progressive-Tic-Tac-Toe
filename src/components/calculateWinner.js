// This function checks if there is a winner in the current board state.
// It returns an object with the winner ('X' or 'O') and the winning line (array of indices), or null if no winner.
export default function calculateWinner(squares) {
    // All possible winning combinations (rows, columns, diagonals)
    const lines = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal from top-left to bottom-right
        [2, 4, 6]  // Diagonal from top-right to bottom-left
    ];
    // Check each winning combination
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        // If all three squares in the line are the same and not null, we have a winner
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { winner: squares[a], line: lines[i] };
        }
    }
    // No winner found
    return null;
}