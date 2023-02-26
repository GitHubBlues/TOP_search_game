import './App.css';
import Header from "./components/Header";
import GameLanding from "./components/GameLanding";
import Footer from "./components/Footer";
import Leaderboard from "./components/Leaderboard";
import GameScreen from "./components/GameScreen";

function App() {
  return (
    <div className="App">
        {/* <div className="main-page">
          <Header />
          <GameLanding />
          <Footer />
        </div>
        <div className="leaderboard-page">
            <Leaderboard />
        </div> */}
        <div className="game-page">
            <GameScreen />
        </div>
    </div>
  );
}

export default App;