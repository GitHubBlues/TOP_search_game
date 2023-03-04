import React from "react";
import './PopUp.css';

export default function PopUp( props ) {
    let popupX = `${-200+props.coord[0]}px`;
    let popupY = `${props.coord[1]}px`;
    let popupTxt = props.message;

    if (props.moveY) {
        popupY = popupY-70;
    }

    return (
        <div className="popup" style={{ top: popupY, left: popupX }} > 
           { popupTxt }
        </div>
    )
}
