import React from "react";
import { Link } from "react-router-dom";
import './GameLanding.css'

import picture1 from '../assets/Motiv1-Baustelle-Badesee1600x1200px.jpg';
import picture2 from '../assets/Motiv2-Zoo-Flohmarkt-1600x1200px.jpg';
import picture3 from '../assets/Motiv3-Bauernhof-Wiesenfest-1600x1200px.jpg';

export default function GameLanding() {

    return(
    <div className="game-presentation">
        <p className="instructions">Find 6 hidden objects in each picture. And be fast, so you reach the first place in the leaderboard.<br />Good luck!</p>
        
        <div className="three-image-container">
            
            <div className="space"></div>
                <Link style={{textDecoration: 'none'}} to="/game" state={{ imageNr: 0 }} >
                    <div className="image-xs-container">
                        <img className="image-xs" src={picture1} alt="lake in summer" />
                        <div className="image-name">At the lake</div>
                    </div>    
                </Link>
            <div className="space"></div>
            
            <Link style={{textDecoration: 'none'}} to="/game" state={{ imageNr: 1 }} >
                <div className="image-xs-container">
                    <img className="image-xs" src={picture2} alt="zoo" />
                    <div className="image-name">At the zoo</div>
                </div>
            </Link>    
            <div className="space"></div>
            
            <Link style={{textDecoration: 'none'}} to="/game" state={{ imageNr: 2 }} >
                <div className="image-xs-container">
                    <img className="image-xs" src={picture3} alt="farm" />
                    <div className="image-name">At the farm</div>
                </div>    
            </Link>
            <div className="space"></div>

        </div> 
        
    </div>

    )
}
