import React,  { useContext, useState } from 'react'
import { CollectionContext} from '../../contexts/collectionContext'
import { Form } from 'semantic-ui-react'
import { checkName, changeMetaDataName } from '../../api/Discogs_api'

const CheckName = ({modalState}) => {    
   
    const collection = useContext(CollectionContext)
     
    const [name, setName] = useState("")
    const [submittedName, setSubmittedName] = useState("")
    
    const [ Exists, setExists ]  = useState(false)    

    const  handleChange = (e, { name, value }) => setName(value);

    const editUserMetadata = async (collection) => { 
      const userID = await collection.userSub      
      const newName = submittedName

      var response = await changeMetaDataName(userID, newName)
      console.log("Response from 9000 : ", response)
      
      }      

    const handleSubmit = async () =>  {     
        
        setSubmittedName(name);    
        let result = await checkName(submittedName);        

        if(result.id !== null)
        {
            await setExists(prevExists => !prevExists);
            console.log(`Exists :::: ${Exists}`)
            
                let collect = result?.num_collection;
                
                if(collect >= 0)
                {
                   //Write the New submittedName to the metadata of the current user  
                    try{
                        editUserMetadata(collection)
                    }  catch(err){console.log(err)}        

                    collection.setUserName(submittedName)
                    //console.log("Current Discogs Name : ", collection.userName) 
                }
                else
                {    }                        
                       
        }
        else { console.log(result.message)}
        //console.log("Current Discogs Name : ", collection.userName) 
        //collection.setPageNumber(activePage)
    }   
      
    return (
        <Form onSubmit={handleSubmit}>      
            <Form.Input required
                style={{paddingTop:'5px'}} 
                fluid                      
                size='large'
                name='name'
                action='Submit'
                value={name}                
                min={2}
                max={30}
                placeholder='Search Discogs Usernames...'
                onChange={handleChange} />                  
        </Form>  
    )
  
}

export default CheckName