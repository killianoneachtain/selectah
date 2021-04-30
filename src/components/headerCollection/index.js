import React from 'react'
import { Header,Segment,  } from 'semantic-ui-react'
import discogsLogo from "../../../src/images/discogs_logo.png"
import { useAuth0 } from '../../../node_modules/@auth0/auth0-react'
import Logout from '../Logout'

const HeaderCollection = ({ title, numCollection }) => {
  
  const { user, isAuthenticated } = useAuth0();
  
  var {spotify_user_id}="";
  
  if(user!=null)
  {    
    var spotify_id =user.sub;
    if(spotify_id.includes("spotify"))
    {
      var res =spotify_id?.split(":")[2];
      spotify_user_id = res;
    }
    //fetch(`/adduser/${spotify_user_id}"`);
  }

  return (
    isAuthenticated &&
      <Segment clearing>
        <Header block>  
          Filtered :  {`${numCollection}  `}
        </Header>
        <Header as='h2' floated='left'>
          Welcome {user.nickname} to Selectah
        </Header>
        <Header as='h2' floated='right'>
        Your <img className='logo' src={discogsLogo} alt="Logo"/> Collection,  {`${user.name}  `}
        </Header> 
        <Logout />        
     
      <Header as='h2' floated='right'>
      Your Spotify ID : {`${spotify_user_id}`}
      </Header>      
    </Segment>
  );
};

export default HeaderCollection;