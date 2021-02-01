import React from "react";
import "./login.css";
const discogsLogo = require('public/discogs_logo_white.png');

export default function Login() {
  return(
    <div className="login-wrapper">
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
      <img src={discogsLogo} alt="Hello"/>
    </div>
  )
}
