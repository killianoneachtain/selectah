import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import loggedIn from '../components/frontPage'

const PublicRoute = ({component: Component, restricted, ...rest}) => {
 return (
     <Route {...rest} render={props => (
         loggedIn && restricted ? 
            <Redirect to="/collection" />
         : <Component {...props} /> 
         )} />
 );
 }

 export default PublicRoute;