import React,  { useContext, useState } from 'react'
import { CollectionContext} from '../../contexts/collectionContext'
import { Form, Modal, Button } from 'semantic-ui-react'
import { checkName, changeMetaDataName } from '../../api/Discogs_api'
//import { useAuth0 } from '../../../node_modules/@auth0/auth0-react'

const CheckName = ({modalState}) => {    
    //const { user, getAccessTokenSilently } =  useAuth0()
    console.log("Current Modal State : ", modalState)
    const collection = useContext(CollectionContext)
     
    const [name, setName] = useState("")
    const [submittedName, setSubmittedName] = useState("")
    
    const [ Exists, setExists ]  = useState(false)
    const [secondOpen, setSecondOpen] = useState(false)


    //const [ collectionSize, setCollectionSize] = useState(0)

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

            if(Exists === true)
            {
                let collection = result?.num_collection;
                
                if(collection >= 0)
                {
                   //Write the New submittedName to the metadata of the current user  
                    try{
                        editUserMetadata(collection)
                    }  catch(err){console.log(err)}        

                    await collection.setUserName(submittedName)
                    console.log("Current Discogs Name : ", collection.userName) 
                }
                else
                {
                    <Modal
          onClose={() => setSecondOpen(false)}
          open={secondOpen}
          size='small'
        >
          <Modal.Header>Modal #2</Modal.Header>
          <Modal.Content>
            <p>That's everything!</p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              icon='check'
              content='All Done'
              onClick={() => setSecondOpen(false)}
            />
          </Modal.Actions>
        </Modal>      

                }                        
            }            
        }
        else { console.log(result.message)}

        console.log("Current Discogs Name : ", collection.userName) 
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