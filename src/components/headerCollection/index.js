import React from 'react'
import { Header,Segment } from 'semantic-ui-react'
import "../headerCollection/headerCollection.css"
import discogsLogo from "../../../src/images/discogs_logo.png"

const HeaderCollection = () => {
  return (
      <Segment clearing>
        <Header block>  
          SELECTAH WILL BPM YOUR DISCOGS COLLECTION 
        </Header>
        <Header as='h2' floated='left'>
          Welcome to Selectah
        </Header>
        <Header as='h2' floated='right'>
        Your <img className='logo' src={discogsLogo} alt="Logo"/> Collection
        </Header>   
      </Segment>
  );
};

export default HeaderCollection;