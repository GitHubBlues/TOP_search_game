import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './GameScreen.css'
import generateGameData from "./generateGameData";
import GameSidebar from './GameSidebar'
import GameImage from './GameImage'
import PopUp from './PopUp'


export default function GameScreen() {
    const location = useLocation()
    const { imageNr } = location.state
    
    console.log(imageNr)

    const initialDB = generateGameData();
    //let imageNr = 0;
    let tmp
    if (imageNr === 0){
        tmp = initialDB[0].image1;
    } else if (imageNr === 1){
        tmp = initialDB[1].image2;
    } else {
        tmp = initialDB[2].image3;
    }    

    const [toSearch, setToSearch] = useState( tmp.items )
    const [modal, setModal] = useState( false )
    const [clickXY, setClickXY] = useState( [] ) 
    const [message, setMessage] = useState( ["Unsuccsessful attempt"] ) 
    
    function checkTargetFound( [playerX, playerY]) {
        let image = document.querySelector('.image-xl');
        let updatedToSearch = JSON.parse(JSON.stringify(toSearch));
        setMessage( "Unsuccsessful attempt" );

        updatedToSearch.forEach( (item) =>{ 
            if ( (Math.abs(item.x/1600 - playerX/image.offsetWidth)<0.023) && (Math.abs(item.y/1200 - playerY/image.offsetHeight)<0.023) ) {
                item.found = true;
                setToSearch(updatedToSearch)
                setMessage( item.name + " found");
            }
        })
    }

    function getPopUp(e) {
        // 200px are subtracted below accounting for the sideebar
        let playerX = e.pageX-200;
        let playerY = e.pageY;
        
        checkTargetFound( [playerX, playerY] )
        setClickXY([playerX, playerY])
        setModal(true)
        console.log(clickXY);
   }

    return(
        <div className="game">
             {/*The coord props in the GamsSidebar component are not used. They were added so that the component re-rendres as planned*/}
            <GameSidebar items = { toSearch } coord={ clickXY }/> 
            <div className = "image-container">
                <GameImage src={ tmp.src } alt={ tmp.alt } items={ toSearch } handleClick={ getPopUp } />
                { modal &&
                <PopUp coord={ clickXY } message={ message } />
                }
            </div>       
        </div>
    )
}
