import React, { useContext } from "react";
import PageTemplate from '../components/templateCollectionPage'
import {CollectionContext} from '../contexts/collectionContext'
//import AddToFavoritesButton from '../components/buttons/addToFavorites'

const CollectionListPage = () => {
  const context = useContext(CollectionContext);

  return (
    <html>
    <head>
      <title>Home : Welcome to Selectah</title>
    </head>
    <body>
      <PageTemplate 
        title='All Collection'
        collection={context.collection}
       // action={movie => <AddToFavoritesButton movie={movie} /> } // Render prop => Add To Favourites Button Displayed
      /></body>
  </html>
  );
};

export default CollectionListPage;