## <ins>[Try it](https://progressive-tic-tac-toe.vercel.app/)</ins>
# Progressive Tic Tac Toe

A modern, interactive Tic Tac Toe game built with React.  
This version features a **progressive rule** for competitiveness:  
- Each player can only have 3 marks on the board at any time.
- When a player makes a new move after already having 3 marks, their oldest mark is removed and that square is blocked for one turn.

Includes:
- Responsive, clean UI with light/dark mode toggle
- Highlighted winning moves
- Reset button to start a new game

---

## How to Run

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to play.

3. **Build for production:**

   ```bash
   npm run build
   ```

   The optimized build will be in the `build` folder.

---

## Game Rules

- Players take turns placing their mark (X or O) on the board.
- If a player already has 3 marks, their oldest mark is removed before placing a new one.
- The square that is cleared cannot be used again until after one more move.
- The first player to align 3 of their marks in a row, column, or diagonal wins.

---

## Features

- **Progressive Tic Tac Toe rules**
- **Light/Dark mode toggle**
- **Winning move highlighting**
- **Responsive design for mobile and desktop**
- **Easy to reset after a round and play again**

---
