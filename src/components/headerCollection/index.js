import React, {useContext} from 'react'
import { Header,Segment } from 'semantic-ui-react'
import discogsLogo from "../../../src/images/discogs_logo.png"
import { useAuth0 } from '../../../node_modules/@auth0/auth0-react'
import Logout from '../Logout'
import { CollectionContext} from '../../contexts/collectionContext'

const HeaderCollection = ({ title, numCollection }) => {
  
  const { user, isAuthenticated } = useAuth0();

  const collection = useContext(CollectionContext);
  
  //console.log(user)

  var {spotify_user_id}="";
  
  if(user!=null)
  {    
    var spotify_id =user.sub;
    if(spotify_id.includes("spotify"))
    {
      var res =spotify_id?.split(":")[2];
      spotify_user_id = res;
      collection.setUserId(spotify_user_id);
      //console.log("collection userid is ", collection.userId);
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
          Welcome {user.name} to Selectah
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