import React, { useState } from 'react';
import './GameSidebar.css';
import generateGameData from "./generateGameData";


export default function GameSidebar( props ) {
  let arrayItems = props.items;
  console.log(arrayItems)

  function makeItem(){
    const tmp = []
    for (let i=0; i < arrayItems.length; i++){
         tmp.push(
          <div className="item">
            <img key = { arrayItems[i].key } src = { arrayItems[i].src } style={{opacity: arrayItems[i].found==true? 0.10:0.99}} />
            <p style={{opacity: arrayItems[i].found==true? 0.10:0.99}}>{ arrayItems[i].name }</p>
         </div>
        )
    }
    return (tmp)
  }

  return (
    <div className="panel">
       <h3>Find these items</h3>
       <div className="all-items">
         {makeItem()}  
       </div>
    </div>
  )
}

