import React, { Component } from 'react'
import selectahLogo from "../../images/selFont2.jpg"
import discogsLogo from "../../images/discogs_logo.png"
import spotifyLogo from "../../images/Spotify_Logo_CMYK_White.png"
import records from "../../../src/images/recordspines_copy.png"
import {  Button,  Header,  Segment, Grid, List, Image, Divider } from 'semantic-ui-react'
import LoginButton from '../Auth0Login'


class Welcome extends Component {
  render() {    
  return(
  
    <Segment>
        <Image src={selectahLogo} size='big' centered/>                 
             
        <Segment  
                style={{                        
                    backgroundImage: `url("${records}")`}} >    
                   
        <Grid columns={3} celled='internally'>
            <Grid.Row >
              <Grid.Column color='yellow'>               
                <Header as='h2'>Use 'Spotify Audio Analysis' to BPM tracks in your Discogs Music Collection. </Header>
                 <Header as='h2' content='Required to use Selectah :' color='grey'/>
                  <List bulleted size='huge'>
                    <List.Item>Spotify Account</List.Item>
                    <List.Item>Collection of Music on Discogs</List.Item>
                    <List.Item>Discogs Username</List.Item>
                  </List>
              </Grid.Column>
           
              <Grid.Column>
                <Grid.Row>
                <Image src={spotifyLogo} size='small' centered style={{paddingBottom: '10px'}}/>  
                  <Button 
                        size='big'                        
                        icon='signup'
                        as='a'
                        color='green'
                        content='Sign Up with Spotify'
                        href='https://www.spotify.com/ie/signup/'
                        alt='dLogo'  
                        fluid                                   
                        />
                </Grid.Row>
                <Divider horizontal>Or</Divider>
                <Grid.Row>
                  <Button 
                        size='big'                        
                        icon='signup'
                        as='a'
                        color='yellow'
                        content='Sign Up with Discogs'
                        href='https://accounts.discogs.com/register'
                        alt='dLogo'  
                        fluid                                    
                        />
                          <Image src={discogsLogo} size='small' centered style={{paddingTop: '10px'}}/>  
                </Grid.Row>
                </Grid.Column>

                <Grid.Column  >           
                    <LoginButton /> 
                </Grid.Column>
                
              </Grid.Row>  
            </Grid>      
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