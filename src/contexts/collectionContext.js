import React, { useEffect, createContext, useReducer } from "react";
import { getCollection } from "../api/Discogs_api";


export const CollectionContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {   

    case "load-collection":  
      return { collection: [...action.payload.collection.releases] };    
           
    default:
      return state;
  }
};

const CollectionContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { collection: [] }); 

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
      }}
    >
      {props.children}
    </CollectionContext.Provider>
  );
};

export default CollectionContextProvider;