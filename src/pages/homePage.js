import React, { useContext } from "react";
import PageTemplate from '../components/templateCollectionPage'
import {CollectionContext} from '../contexts/collectionContext'
import { Header,Segment } from 'semantic-ui-react'
import Footer from '../components/footer'

//import AddToFavoritesButton from '../components/buttons/addToFavorites'

const CollectionListPage = () => {
  const context = useContext(CollectionContext);

  return (
    <Segment>
    <Header as='h1'>Selectah</Header>      
    
      <PageTemplate 
        title='My Collection'
        collection={context.collection}
       // action={movie => <AddToFavoritesButton movie={movie} /> } // Render prop => Add To Favourites Button Displayed
      /> 
   
    
    <Footer/>
    
      </Segment> 
  
  
  );
};

export default CollectionListPage;