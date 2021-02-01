import React from "react";
import "./login.css";
import discogsLogo from "../../../src/images/discogs_logo.png";

export default function Login() {
  return(
    <div>
    <div className="login-wrapper">
      <div>
    <img className='logo' src={discogsLogo} alt="Logo"/>
    </div>
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>    
    </div>
    
    
    </div>   
   
  )
}
