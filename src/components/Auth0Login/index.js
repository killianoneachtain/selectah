import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Button } from 'semantic-ui-react'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    
  <Button 
            onClick={() => loginWithRedirect()}
            content='Login' 
            icon='sign in'
            size='big'
            color='white'        
            fluid            
            style={{verticalAlign: 'middle'}}
            />);
};

export default LoginButton;