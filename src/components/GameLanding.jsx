import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/init-firebase.js";

export default function ImageOverview() {

    function getData(){
        const dataRaw = collection(db, "data_xy");
        getDocs(dataRaw).then(response =>{
        console.log(response.docs)
        }).catch(error => console.log(error.message))
    }

    return(
    <div>
        { getData() }
        <h1>The end</h1>  
    </div>

    )
}
