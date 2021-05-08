import React,  { useContext, useState } from 'react'
import { CollectionContext} from '../../contexts/collectionContext'
import { Form, Input } from 'semantic-ui-react'
import { checkName, changeMetaDataName } from '../../api/Discogs_api'
//import { useAuth0 } from '../../../node_modules/@auth0/auth0-react'

const CheckName = () => {    
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

      /*** CHECK IF THEY HAVE COLLECTION ALSO */
      }      

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
                control={Input}
                label='name'                          
                error={{
                  content: 'Please enter a valid email address',
                  pointing: 'below',
                }}
                placeholder='Search Discogs Usernames...'
                onChange={handleChange} /> 
            <Form.Button content='Submit' />         
        </Form>  
    )
  
}

export default CheckName