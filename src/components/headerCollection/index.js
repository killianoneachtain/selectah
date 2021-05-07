import React, {useContext, useState, useEffect} from 'react'
//import { Header,Segment } from 'semantic-ui-react'
//import discogsLogo from "../../../src/images/discogs_logo.png"
import { useAuth0 } from '../../../node_modules/@auth0/auth0-react'
import { CollectionContext} from '../../contexts/collectionContext'
import NavBar from '../navBar'

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
        <NavBar filtered={numCollection} userName={user.name} discogs_username={userMetadata.discogs_username} />
         
  );
};

export default HeaderCollection;