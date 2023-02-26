import React from 'react';
import './GameImage.css';

export default function GameImage( props )  {

  function loadImage() {
      return  <img className="image-xl" src={props.src} alt={props.alt} onClick={props.handleClick}></img>     
  }

  return (
      loadImage()
  )
}