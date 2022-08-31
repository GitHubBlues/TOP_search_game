import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/init-firebase.js";
import { AiOutlineFilter } from "react-icons/ai";
import './Leaderboard.css';

export default function Leaderboard(){
    
    const [scores, setScores] = useState({time:0, image:".", player: "."});
    const dataRaw = collection(db, "data_scores");

    function getData( fimage="none" ){
        getDocs(dataRaw)
        .then(response =>{
            const scoreData = response.docs.map( element => ({
                data: element.data(),
                id:   element.id
            }))

            scoreData.sort((a, b) => a.data.time-b.data.time);
            if (fimage === "none") {
                setScores(scoreData)
            } else {
                const filtered = scoreData.filter(element => element.data.image === fimage)
                setScores(filtered)
            }

        }).catch(error => console.log(error.message))
    }  


    useEffect(() => {
        getData()
    },[])


    function populateTable(){
        if (scores.length > 0) { 
            return(
            scores.map(element =>(
                
                <tr key={element.id} className="row-table-body">
                    <th className="cell-table-body" > {element.data.image} </th>
                    <th className="cell-table-body" > {element.data.time} </th>
                    <th className="cell-table-body" > {element.data.name} </th>
                </tr>
            )) )
        }    
    } 

    
    function filter(e) {
        console.log(e.currentTarget.parentElement)
        getData(e.currentTarget.innerHTML)
    }


    return(
        <div className="leaderboard">
            <h1 className="title">Leaderboard</h1>
            <p className="instructions">Select the image you are interested in</p>

            <table >
                <thead>
                    <tr className="row-table-header">
                        <th className="cell-table-header">
                            <div className="dropdown"> Select Image <AiOutlineFilter className="icon"/>
                            <div className="dropdown-content"> 
                                <div className="item" onClick={filter}>lake</div>
                                <div className="item" onClick={filter}>zoo</div>
                                <div className="item" onClick={filter}>farm</div>
                            </div>
                            </div> 
                        </th>
                        <th className="cell-table-header">Time(s)</th>
                        <th className="cell-table-header">Player</th>
                    </tr>
                </thead>
                <tbody>
                    {populateTable()}
              </tbody>       
            </table>    
        </div>
    )
}