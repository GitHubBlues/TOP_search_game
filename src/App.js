import './App.css';
import Header from "./components/Header";
import ImageOverview from "./components/GameLanding";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header />
          <ImageOverview />
      </header>
    </div>
  );
}

export default App;
