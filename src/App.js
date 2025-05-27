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
        A simple Tic Tac Toe game where players can only place a mark in an empty square. 
        If a player has already placed 3 marks, the oldest one is removed and that square is blocked for one turn.
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
