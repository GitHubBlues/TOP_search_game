import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import generateGameData from "./generateGameData";
import GameSidebar from './GameSidebar';
import GameImage from './GameImage';
import PopUp from './PopUp';
import SaveScore from './SaveScore';
import './GameScreen.css';

export default function GameScreen() {
    const location = useLocation()
    const { imageNr } = location.state
    const initialDB = generateGameData();

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
    const [enterName, setEnterName] = useState( false )
    const [clickXY, setClickXY] = useState( [] ) 
    const [message, setMessage] = useState( ["Unsuccsessful attempt"] ) 
    const [startTimer, setStartTimer] = useState( Date.now() ) 
    const [elapsedTime, setElapsedTime] = useState( Date.now() ) 
    const [moveYCoord, setMoveYCoord] = useState( false )
   
    function checkTargetFound( [playerX, playerY]) {
        let image = document.querySelector('.image-xl');
        let updatedToSearch = JSON.parse(JSON.stringify(toSearch));
        setMessage( "OOPS  :(" );

        updatedToSearch.forEach( (item) =>{ 
            if ( (Math.abs(item.x/1600 - playerX/image.offsetWidth)<0.023) && (Math.abs(item.y/1200 - playerY/image.offsetHeight)<0.023) ) {
                item.found = true;
                setToSearch(updatedToSearch)
                setMessage( item.name + " found");
            }

            if (image.offsetHeight-playerY < 70) {
                setMoveYCoord( true )
            }
        })

    }

    function getPopUp(e) {
        // 200px are subtracted below accounting for the sideebar
        let playerX = e.pageX - 200;
        let playerY = e.pageY;
        
        setMoveYCoord( false )
        checkTargetFound( [playerX, playerY] )
        setClickXY([playerX, playerY])
        setModal(true)
    }

    useEffect(() => {
        let counter = 0;
        toSearch.forEach( (item) =>{
             if (item.found==true) counter=counter+1;
        })  
         if ( counter==6 ) {
             setEnterName(true)
             const timerEnd = Date.now() ;
             setElapsedTime((timerEnd-startTimer)/1000);
        }; 
    }, [toSearch]);


    return(
        <div className="game">
             {/*The coord props in the GamsSidebar component are not used. They were added so that the component re-rendres as planned*/}
            <GameSidebar items = { toSearch } coord={ clickXY }/> 
            <div className = "image-container">
                <GameImage src={ tmp.src } alt={ tmp.alt } items={ toSearch } handleClick={ getPopUp } />
                { modal &&
                <PopUp coord={ clickXY } message={ message } moveY={ moveYCoord } />
                }
            </div>    
                { enterName &&
                <SaveScore timer={ elapsedTime } image={ imageNr } />
                }   
        </div>
    )
}
