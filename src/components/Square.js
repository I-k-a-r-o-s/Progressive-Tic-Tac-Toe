// Square component: represents a single cell in the Tic Tac Toe board.
// Props:
// - value: 'X', 'O', or null (the symbol to display in the square)
// - onSquareClick: function to call when the square is clicked
// - highlight: if true, applies a highlight style for winning squares
// - disabled: if true, disables the button (cannot be clicked)
export default function Square({ value, onSquareClick, highlight, disabled }) {
    return (
        <button
            // Apply 'winner-square' class if highlight is true
            className={`square${highlight ? ' winner-square' : ''}`}
            // Call the provided click handler when clicked
            onClick={onSquareClick}
            // Disable the button if already filled or explicitly disabled
            disabled={!!value || disabled}
        >
            {value}
        </button>
    );
}