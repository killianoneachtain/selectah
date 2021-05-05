import React from 'react'
import {  Segment, Input,Header } from 'semantic-ui-react'

const DiscogsUsername = (user) => {  

    console.log("the user in the search box is :  ", user);


    return (
        <Segment>
            <Header as='h2' floated='left' content='Discogs UserName'/>
            <Input 
                icon='users' 
                iconPosition='left' 
                label={{ icon: 'asterisk' , color: 'yellow' }}
                labelPosition='right corner'
                
                size='huge'
                placeholder='Search Discogs Usernames' />
        </Segment>
        )
}
 export default DiscogsUsername