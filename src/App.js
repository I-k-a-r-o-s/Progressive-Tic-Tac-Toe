import './App.css'; // Import global styles
import Board from './components/Board'; // Import the main game board component
import DarkModeToggle from './components/darkmode'; // Import the dark mode toggle button

// App component: main entry point for the Progressive Tic Tac Toe app
export default function App() {
  return (
    // Main container for centering and layout
    <div className="main-container">
      {/* Button to toggle dark/light mode */}
      <DarkModeToggle />
      {/* Page header */}
      <h1 className="page-header">Progressive Tic Tac Toe</h1>
      {/* Description of the game rules */}
      <p className="page-description">
        A simple Two player Tic Tac Toe game with a little twist!</br>
        <strong>Game Rules:</strong>
        <ul style={{ textAlign: "left", maxWidth: 400, margin: "16px auto" }}>
          <li>Players take turns placing their mark (X or O) on the board.</li>
          <li>If a player already has 3 marks, their oldest mark is removed before placing a new one.</li>
          <li>The square that is cleared cannot be used again until after one more move.</li>
          <li>The first player to align 3 of their marks in a row, column, or diagonal wins.</li>
        </ul>
      </p>
      {/* The game board */}
      <Board />
      {/* Footer with GitHub link */}
      <div className="footer">
        &copy; {new Date().getFullYear()} Progressive Tic Tac Toe &mdash; <a href="https://github.com/I-k-a-r-o-s/Progressive-Tic-Tac-Toe.git" style={{color:'#1976d2'}}>GitHub</a>
      </div>
    </div>
  );
}
