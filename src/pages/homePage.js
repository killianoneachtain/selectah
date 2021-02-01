import React, {useState, useEffect } from "react";
import Pizzly from "pizzly-js";
import Profile from "../components/Profile";
import discogsLogo from "../../src/images/discogs_logo.png";
import "../components/frontPage/frontPage.css";

const PIZZLY_HOSTNAME = "";
const PIZZLY_PUBLISHABLE_KEY = "";
const PIZZLY_SETUP_ID_DISCOGS_DEMO_APP = "";

const App = () => {
  const [profile, setProfile] = useState()  

  // Initialize Pizzly
const pizzly = new Pizzly({
  host: PIZZLY_HOSTNAME,
  publishableKey: PIZZLY_PUBLISHABLE_KEY
})

const discogs = pizzly.integration('discogs', {
  setupId: PIZZLY_SETUP_ID_DISCOGS_DEMO_APP
})

const fetchProfile = async (authId) => {
  await discogs
    .auth(authId)
    .get("/user")
    .then((response) => response.json())
    .then((json) => setProfile(json));
};

 /**
   * The connect method lets us authenticate a user
   * to our GitHub application (i.e. the OAuth dance)
   */

  const connect = () => {
    discogs
      .connect()
      .then(({ authId }) => {
        console.log('Sucessfully connected!', authId)
        fetchProfile(authId)
      })
      .catch(console.error)
  }

  return (
    <>  
      
      <div className="welcome-wrapper">
  
  <div>
      <h1>Selectah</h1>
  
      <h2>BPM your music collection.</h2>
  </div>     
  <div>
      
      <button className="button" onClick={connect}>Login</button>
 {profile && <Profile profile={profile} />}

      <a href='https://accounts.discogs.com/register'>
          <button className="button" type="submit">Register</button>
          
      </a>
  </div>      

  <div>
  <img className='logo' src={discogsLogo} alt="Logo"/>
  </div>    
</div>
        
    </>
  );
};

export default App;