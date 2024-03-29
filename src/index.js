import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
//import HeaderCollection from './components/headerCollection'
import 'semantic-ui-css/semantic.min.css'
import { Segment} from 'semantic-ui-react'
import CollectionListPage from './pages/homePage'
import GenresContextProvider from './contexts/genresContext'
import CollectionContextProvider from './contexts/collectionContext'
import Welcome from './components/frontPage'
import { Auth0Provider } from "@auth0/auth0-react"
import PrivateRoute from '../src/routes/PrivateRoute'
import PublicRoute from '../src/routes/PublicRoute'
import Footer from '../src/components/footer'

const App = () => {  
  return (  
    <BrowserRouter>
      <Auth0Provider
          domain="selectah-app.eu.auth0.com"
          clientId="sxWhNmIpC0AyzdD4GzcBE7EiHwnFEcIu"
          redirectUri="https://selectah.vercel.app/collection"          
          audience="https://selectah-app.eu.auth0.com/api/v2/"
          scope="openid profile read:current_user update:current_user_metadata"
        >
          <Segment>   
            <CollectionContextProvider>
              <GenresContextProvider>
                  <Switch>
                      <PublicRoute restricted={false} path="/" component={Welcome} exact/>                     
                      <PrivateRoute path="/collection" component={CollectionListPage} exact/>
                      <Redirect from="*" to="/" />
                  </Switch>
               </GenresContextProvider>
               <Footer />
            </CollectionContextProvider>  
          </Segment>  
         
      </Auth0Provider>
    </BrowserRouter>
    
  );
};

ReactDOM.render( 
  <App />
  
, document.getElementById("root"));

