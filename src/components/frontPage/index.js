import React from "react";
import "./frontPage.css";
import discogsLogo from "../../../src/images/discogs_logo.png"
import {  Button, Segment, Header } from 'semantic-ui-react'

export default function Welcome() {
    
  return(
  
    <Segment>
        <Header as='h1'>Selectah</Header>        
        <Header as='h2'>BPM your music collection.</Header>
           
        <Segment>            
            <Button >Login</Button>   
                <Button 
                size='big' 
                src={discogsLogo} 
                as='a'
                href='https://accounts.discogs.com/register'
                alt="dLogo"
                floated='right'
                verticalAlign='middle'                            
                />
        </Segment>            
     </Segment>
  )
}