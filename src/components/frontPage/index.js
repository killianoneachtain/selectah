import React, { Component } from 'react'
import selectahLogo from "../../images/selFont2.jpg"
import discogsLogo from "../../images/discogs_logo.png"
import spotifyLogoWhite from "../../images/Spotify_Logo_CMYK_White.png"
import spotifyLogoGreen from "../../images/Spotify_Logo_CMYK_Green.png"
import auth0logo from "../../images/Auth0–black.png"
import records from "../../../src/images/recordspines_copy.png"
import {  Button,  Header,  Segment, Grid, List, Image, Divider } from 'semantic-ui-react'
import LoginButton from '../Auth0Login'


class Welcome extends Component {
  render() {    
  return(
  
    <Segment>
        <Image src={selectahLogo} size='big' centered style={{paddingBottom: '20px'}}/>                 
                          
        <Grid columns={3} celled='internally'>
            <Grid.Row floated='left' color='yellow'>
              <Grid.Column floated='left' >               
                <Header as='h2'>Use 'Spotify Audio Analysis' to BPM tracks in your Discogs Music Collection. </Header>
                 <Header as='h2' content='Required to use Selectah :' color='grey'/>
                  <List bulleted size='huge'>
                    <List.Item>Spotify Account</List.Item>
                    <List.Item>Collection of Music on Discogs</List.Item>
                    <List.Item>Discogs Username</List.Item>
                  </List>
              </Grid.Column>
           
              <Grid.Column style={{    backgroundImage: `url("${records}")`}} >
                <Grid.Row>
                <Image src={spotifyLogoWhite} size='small' centered style={{paddingBottom: '10px'}}/>  
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
                <Divider horizontal></Divider>
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

                <Grid.Column columns={3}  >    
                  <Grid.Row >  
                  <Image src={spotifyLogoGreen} size='small' centered style={{paddingBottom: '10px'}}/>  
                    <LoginButton /> 
                  <Image src={auth0logo} size='small' centered style={{paddingTop: '10px'}}/>  
                  
                  </Grid.Row>  
                </Grid.Column>
                
              </Grid.Row>  
            </Grid>      
          </Segment>                 
       
  )
}}

export default Welcome