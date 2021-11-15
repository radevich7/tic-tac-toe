import "./App.css";
import Board from "./Components/Board";
function App() {
  return (
    <div className="game_container">
      <button className="button_newGame">New Game</button>
      <Board />
    </div>
  );
}

export default App;
