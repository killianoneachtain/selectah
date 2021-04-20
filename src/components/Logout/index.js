import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Button } from 'semantic-ui-react'

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button 
            onClick={() => logout({ returnTo: 'http://localhost:3000' })}
            content='Log Out' 
            icon='sign out'
            size='large'
            color='red'
            />
  );
  
};

export default LogoutButton;