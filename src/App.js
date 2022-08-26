import './App.css';
import Header from "./components/Header";
import GameLanding from "./components/GameLanding";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <div className="main-page">
          <Header />
          <GameLanding />
          <Footer />
        </div>
    </div>
  );
}

export default App;
