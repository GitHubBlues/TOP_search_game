import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'

export default function Header() {
  return (
    <div className="header" >
        <h1 className="title">Search and find</h1>
        <Link style={{textDecoration: 'none'}} to="/leaderboard" >
          <button type="button">Leaderboard</button> 
        </Link>
    </div>
  )
}
