import React, {useContext, useState, useEffect} from 'react'
import { Header,Segment, Image } from 'semantic-ui-react'
import discogsLogo from "../../../src/images/discogs_logo.png"
import { useAuth0 } from '../../../node_modules/@auth0/auth0-react'
import Logout from '../Logout'
import { CollectionContext} from '../../contexts/collectionContext'

const HeaderCollection = ({ title, numCollection }) => {  
  const { user, isAuthenticated, getAccessTokenSilently } =  useAuth0();  
  const [userMetadata, setUserMetadata] = useState([]);  

  const collection = useContext(CollectionContext);  

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "selectah-app.eu.auth0.com";  
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
  
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });  
        const { user_metadata } = await metadataResponse.json();  
        setUserMetadata(user_metadata);
      } 
      catch (e) {
        console.log(e.message);
      }
    };  
    
    getUserMetadata();    
    
  }, [getAccessTokenSilently, user]);

  collection.setUserName(userMetadata.discogs_username);  
  collection.setUserId(String(user?.sub)?.split(':')[2]);

  return (
    isAuthenticated && 
      <Segment clearing>
          <Header block>  
            Filtered :  {`${numCollection}  `}
          </Header>
          <Header as='h2' floated='left'>
            Welcome {user.name} to Selectah
          </Header>       
          <Image src={discogsLogo} size='small' /> Collection,  {`${userMetadata.discogs_username}  `}
            <Logout />        
      </Segment>
  );
};

export default HeaderCollection;