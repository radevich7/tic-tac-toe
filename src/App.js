import "./App.css";
import Game from "./Components/Game";
function App() {
  return (
    <div className="game_container">
      <button className="button_newGame">New Game</button>
      <Game />
    </div>
  );
}

export default App;
