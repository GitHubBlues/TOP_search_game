import './App.css';
import React, { Component }  from 'react';
import Header from "./components/Header";
import GameLanding from "./components/GameLanding";
import Footer from "./components/Footer";
import Leaderboard from "./components/Leaderboard";
import GameScreen from "./components/GameScreen";
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <div className="App"> */}
        <Route path="/leaderboard" element={    
            <div className="leaderboard-page">
                <Leaderboard />
            </div>
        }/>    
        <Route path="/game" element={    
            <div className="game-page">
                <GameScreen />
            </div>
        }/> 
        <Route path="/" element={  
            <div className="main-page">
              <Header />
              <GameLanding />
              <Footer />
            </div>
        }/>     
        {/* </div>     */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;