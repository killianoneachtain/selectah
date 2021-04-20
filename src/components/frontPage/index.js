import React, { Component } from 'react'
import discogsLogo from "../../images/discogs_logo.png"
import {  Button,  Header,  Segment, Grid, Divider} from 'semantic-ui-react'
import LoginButton from '../Auth0Login'
import LogoutButton from '../Logout'
import {Link} from 'react-router-dom'

class Welcome extends Component {
  render() {    
  return(
  
    <Segment>
        <Header as='h1'>Selectah</Header>        
        <Header as='h2'>BPM your MUSIC!</Header>
        <Header as='h4'>Use your Discogs music collection and Spotify Audio Analysis to BPM your favourite tracks.</Header>
          
        
        <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <LoginButton />      
        
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>       
        <Button 
                size='big' 
                src={discogsLogo} 
                icon='signup'
                as='a'
                color='yellow'
                content='Sign Up'
                href='/sign-up'
                alt="dLogo"
                floated='center'
                verticalAlign='middle'                            
                />
      </Grid.Column>
         
       
      
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment> 
                
     </Segment>    
  )
}}

export default Welcome

/*
<Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            size='large'
            placeholder='Username'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            size='large'
            label='Password'
            type='password'
          />

          <Button 
          content='Login' 
          icon='sign in'
          size='large'
          color='green'
          on
           />
        </Form>   
*/