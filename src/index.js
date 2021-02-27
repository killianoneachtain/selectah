import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter} from "react-router-dom";
import HeaderCollection from './components/headerCollection'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
//import Front from './pages/frontPage';
import GenresContextProvider from './contexts/genresContext'
import Collection from './pages/collection'


const App = () => {
  return (  
    <BrowserRouter>  
     <div className="jumbotron">
      <HeaderCollection />      {/* New Header  */}
        <div className="container-fluid">
          <GenresContextProvider>         
            <Collection />     
          </GenresContextProvider>      
        </div>
      </div>  
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));


