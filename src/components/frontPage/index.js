import React from "react";
import "./frontPage.css";
import discogsLogo from "../../../src/images/discogs_logo.png";

export default function Welcome() {
  return(
  
    <div className="welcome-wrapper">
  
        <div>
            <h1>Selectah</h1>
        
            <h2>BPM your music collection.</h2>
        </div>     
        <div>
            <button className="button" type="submit">Login</button>
       
            <a href='https://accounts.discogs.com/register'>
                <button className="button" type="submit">Register</button>
            </a>
        </div>      
    
        <div>
        <img className='logo' src={discogsLogo} alt="Logo"/>
        </div>    
     </div>
    
    
   
  )
}