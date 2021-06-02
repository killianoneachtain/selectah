import React, {useContext, useState, useEffect} from 'react'
import { useAuth0 } from '../../../node_modules/@auth0/auth0-react'
import { CollectionContext} from '../../contexts/collectionContext'
import NavBar from '../navBar'

const HeaderCollection = ({  numCollection }) => {  
  const collection = useContext(CollectionContext);   
  const { user, isAuthenticated, getAccessTokenSilently } =  useAuth0()
  const [userMetadata, setUserMetadata] = useState([]) 
  const [access, setAccess] =useState("")  

  useEffect(() => {
    const getUserMetadata = async () => { 
      console.log("collection username : ", collection.username)     

      if(collection.username !== "undefined"){

      const domain = "selectah-app.eu.auth0.com";  
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user,read:current_user_metadata, update:current_user_metadata",
        }); 
       
        await setAccess(accessToken)       

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });  
        const { user_metadata } = await metadataResponse.json();  
        console.log("User_metadata : ", user_metadata);
       
        await setUserMetadata(user_metadata);
      } 
      catch (e) {
        console.log(e.message);
      }}
    };  
    
    getUserMetadata();    
    
  }, [getAccessTokenSilently, user, collection]);   

  //console.log("userMetadata : ", userMetadata)
  collection.setUserName(userMetadata.discogs_username);  
  collection.setuserID(String(user?.sub)?.split(':')[2]);
  //console.log("user iD : ", collection.userID)
  collection.setUserSub(user?.sub)
  collection.setAccessToken(access)

  return (
    isAuthenticated &&       
        <NavBar filtered={numCollection} userName={user.name} discogs_username={collection.userName} />
         
  );
};

export default HeaderCollection;