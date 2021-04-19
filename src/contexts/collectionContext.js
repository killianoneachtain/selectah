import React, { useEffect, createContext, useReducer } from "react";
import { getCollection } from "../api/Discogs_api";

export const CollectionContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        collection: state.collection.filter((c) => c.id !== action.payload.item.id),
        favorites: [...state.favorites, action.payload.item],
      };

    case "load-collection":
      return { collection: [...action.payload.collection.releases], favorites: [] }; 
    
    case "add-review":
        return {
          collection: [...state.collection.releases],
          favorites: [
            ...state.favorites.filter((c) => c.id !== action.payload.item.id),
            { ...action.payload.item, review: action.payload.review },
          ],
        };
    default:
      return state;
  }
};

const CollectionContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { collection: [], favorites: [] });

  const addToFavorites = (itemId) => {
    const index = state.collection.map((c) => c.id).indexOf(itemId);
    dispatch({ type: "add-favorite", payload: { item: state.collection[index] } });
  };

  const addReview = (item, review) => {
    dispatch({ type: "add-review", payload: { item, review } });
  }; 

  useEffect(() => {
    getCollection().then((collection) => {
      dispatch({ type: "load-collection", payload: { collection } });
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <CollectionContext.Provider
      value={{
        collection: state.collection,
        favorites: state.favorites,         
        addToFavorites: addToFavorites,
        addReview: addReview
      }}
    >
      {props.children}
    </CollectionContext.Provider>
  );
};

export default CollectionContextProvider;