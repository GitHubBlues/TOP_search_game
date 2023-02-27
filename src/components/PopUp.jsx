import React from "react";
import './PopUp.css';

export default function PopUp( props ) {
    // let popupX = `${props.coord[0]}px`;
    // popupY = `${-1200+props.coord[1]}px`;
    let popupX = `${-1300+props.coord[0]}px`;
    let popupY = `${props.coord[1]}px`;
    console.log("fff", popupX, popupY)
    console.log(popupX, popupY)

    let popupTxt = props.message + " " + popupX+ " " + popupY;
    console.log(props)
     return (
        // <div className="popup" style={{ top: {popupY}, left: {popupX}, lineHeight : 10, padding: 40 }} > POP UP
        <div className="popup" style={{ top: popupY, left: popupX, padding: 0 }} > { popupTxt }
        </div>
    )
}
