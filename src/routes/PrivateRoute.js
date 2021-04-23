import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import loggedIn from '../components/frontPage'

const PrivateRoute = ({component: Component, ...rest}) => {
 return (
     <Route {...rest} render={props => (
         loggedIn ? 
            <Component {...props} /> 
         : <Redirect to="/" />
         )} />
 );
 }

 export default PrivateRoute;