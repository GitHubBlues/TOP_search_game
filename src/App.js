import './App.css';
import Header from "./components/Header";
import ImageOverview from "./components/GameLanding";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header />
          <ImageOverview />
          <Footer />
      </header>
    </div>
  );
}

export default App;
