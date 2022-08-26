import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
        Made by {"\u00a0"} 
        <a href="https://github.com/GitHubBlues?tab=repositories">
        GitHubBlues {"\u00a0"} 
        < GoMarkGithub /></a>
    </div>
  )
}
