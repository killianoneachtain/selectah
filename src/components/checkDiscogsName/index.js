import React,  { useContext, useState } from 'react'
import { CollectionContext} from '../../contexts/collectionContext'
import { Form } from 'semantic-ui-react'
import { checkName, changeMetaDataName } from '../../api/Discogs_api'
//import { useAuth0 } from '../../../node_modules/@auth0/auth0-react'

const CheckName = ({modalState}) => {    
    //const { user, getAccessTokenSilently } =  useAuth0()
    const collection = useContext(CollectionContext);
     
    const [name, setName] = useState("");
    const [submittedName, setSubmittedName] = useState("");
    const [ Exists, setExists ]  = useState(false);

    const  handleChange = (e, { name, value }) => setName(value);

    const editUserMetadata = async (collection) => { 
      const userID = await collection.userSub
      console.log("checkName userID:", userID)
      const newName = submittedName

      var response = await changeMetaDataName(userID, newName)
      console.log("Response from 9000 : ", response)
      

      
      }
        
        /*
        const domain = "selectah-app.eu.auth0.com";  
        try {
          //const accessToken = await collection.accessToken         
  
          console.log("User.sub : ", collection.UserSub)
          console.log("accessToken", collection.AccessToken)

          const userDetailsByIdUrl = `https://${domain}/api/v2/users/${collection.userSub}`;
    
          const metadataResponse = await fetch(userDetailsByIdUrl, {
              method: 'PATCH',
            headers: {
              Authorization: `Bearer ${collection.accessToken}`,
              "Content-Type": "application/json",
            },
            data: {
                user_metadata: {
                    discogs_username: {submittedName}
                }
            }  */            
            
            
          //const { user_metadata } = await metadataResponse.json();  
          //setUserMetadata(user_metadata);          
       
      

    const handleSubmit = async () =>  {     

        console.log(`Check the Name :::: ${name}`)
        setSubmittedName(name);    
        let result = await checkName(submittedName);

        console.log("Result :", result)

        if(result.id !== null)
        {
            await setExists(true)
            console.log(`Exists :::: ${Exists}`)

            //Write the New submittedName to the metadata of the current user  
            try{
                editUserMetadata(collection)
            }  catch(err){console.log(err)}        

            await collection.setUserName(submittedName)
            console.log("Current Discogs Name : ", collection.userName)
        }
        else { console.log(result.message)}
        //collection.setPageNumber(activePage)
    }   
      
    return (
        <Form onSubmit={handleSubmit}>      
            <Form.Input 
                style={{paddingTop:'5px'}} 
                fluid 
                icon='users'         
                size='large' 
                iconPosition='huge' 
                name='name'
                value={name}
                placeholder='Search Discogs Usernames...'
                onChange={handleChange} /> 
            <Form.Button content='Submit' />         
        </Form>  
    )
  
}

export default CheckName