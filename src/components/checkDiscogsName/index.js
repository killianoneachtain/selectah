import React, { useContext, useState } from 'react'
import { CollectionContext} from '../../contexts/collectionContext'
import { Form } from 'semantic-ui-react'
import { checkName } from '../../api/Discogs_api'

const CheckName = ({currentName}) => {
    
    const collection = useContext(CollectionContext);
     
   const [name, setName] = useState("");
   const [submittedName, setSubmittedName] = useState("");
   const [ Exists, setExists ]  = useState(false);

  const handleSubmit = async (e, {name, value}) =>  {     

        console.log(`Check the Name :::: ${name}`)
        setName(name);    
        let result = await checkName(name);
        if(result.message !== 'User does not exist or may have been deleted.')
            setExists(true)

        console.log(`Exists :::: ${Exists}`)      


       // console.log("Current Discogs Name : ", collection.userName)
        //collection.setPageNumber(activePage)
  }   
      
    return (
        <Form onSubmit={handleSubmit}>      
        <Form.Input 
          style={{paddingTop:'5px'}} 
          fluid 
          icon='users'
          value={this.state.submittedName} 
          size='large' 
          iconPosition='huge' 
          placeholder='Search users...' /> 
          onChange={}
          </Form>            
          
    )
  
}

export default CheckName