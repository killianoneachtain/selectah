import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Redirect,Route } from 'react-router-dom'
//import HeaderCollection from './components/headerCollection'
import 'semantic-ui-css/semantic.min.css'
import { Segment} from 'semantic-ui-react'
import CollectionPage from './pages/homePage'
import GenresContextProvider from './contexts/genresContext'
import CollectionContextProvider from './contexts/collectionContext'

const App = () => {
  return (  
    <BrowserRouter>
        
          <Segment>   
            <CollectionContextProvider>
                <GenresContextProvider> 
                <Switch>                    
                      <Route path="/" component={CollectionPage} />         
                        <Redirect from="*" to="/" />
                    </Switch>
                </GenresContextProvider> 
            </CollectionContextProvider>  
            </Segment>  
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));


