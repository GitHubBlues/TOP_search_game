import React from "react";
import { db } from "../lib/init-firebase.js";
import { collection, addDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";
import './SaveScore.css';

export default function SaveScore( props ) {
    const navigate = useNavigate();

    async function saveToDatabase(e) {
        let imageSet, nameSet, timeSet
        nameSet = document.getElementById("inputPlayer").value; ; 
        timeSet = props.timer;
        e.preventDefault();  

        if (props.image===0) {
            imageSet ="lake";
        } else if (props.image===1) {
            imageSet ="zoo";
        } else {
            imageSet ="farm";
        }
    
        try {
            if (nameSet.length > 0 ) {
                await addDoc(collection(db, "data_scores"), {
                    image: imageSet,
                    name: nameSet,
                    time: timeSet
                });
            }
        } catch(e) {
            console.error(e);  
        }
        
        navigate("/");
    }


    return (
        <div className="inputScore">
            <div className="popup1" > Congratulations! </div>
            <div className="popup2" > You found all hidden objects in { props.timer } seconds. </div>
            <div className="popup3" > Enter your name to become immortalized in the leaderboard.</div>
            <div className="inputbox">
                <label htmlFor="inputPlayer"> Name: </label>
                <input id="inputPlayer" type="text"/>
            </div>
            <div className="buttonContainer">
                <button id="saveBtn" onClick={ saveToDatabase } >save</button>
            </div>
        </div>
    )
}    