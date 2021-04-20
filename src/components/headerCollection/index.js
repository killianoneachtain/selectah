import React from 'react'
import { Header,Segment } from 'semantic-ui-react'
import "../headerCollection/headerCollection.css"
import discogsLogo from "../../../src/images/discogs_logo.png"
import { useAuth0 } from '../../../node_modules/@auth0/auth0-react'


const HeaderCollection = ({ title, numCollection }) => {
  
  const { user, isAuthenticated } = useAuth0();
  console.log("User",user);

  return (
    isAuthenticated &&
      <Segment clearing>
        <Header block>  
          Filtered :  {`${numCollection}  `}
        </Header>
        <Header as='h2' floated='left'>
          Welcome {user.nickname} to Selectah
        </Header>
        <Header as='h2' floated='right'>
        Your <img className='logo' src={discogsLogo} alt="Logo"/> Collection,  {`${title}  `}
        </Header>   
      </Segment>
  );
};

export default HeaderCollection;