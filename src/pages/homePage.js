import React, {useState } from "react";
import Profile from "../components/Profile";
import discogsLogo from "../../src/images/discogs_logo.png";
import "../components/frontPage/frontPage.css";
import { request_token } from "../../src/api/Discogs_api";

const App = () => {
  const [profile] = useState()  
  
  return (
    <>        
      <div className="welcome-wrapper">  
  <div>
      <h1>Selectah</h1>  
      <h2>BPM your music collection.</h2>
  </div>     
  <div>
      
      <button className="button" onClick={request_token} >Login</button>
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