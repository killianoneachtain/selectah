import React, { useEffect, createContext, useReducer, useState } from "react";
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
  const [ pageNumber, setPageNumber] = useState(1);  

  useEffect(() => {    
    getCollection(pageNumber).then((collection) => {
      dispatch({ type: "load-collection", payload: { collection } });
    });       
  }, [pageNumber]);

  return (
    <CollectionContext.Provider
      value={{
        collection: state.collection,       
        setPageNumber,
        pageNumber    
      }}
    >
      {props.children}
    </CollectionContext.Provider>
  );
};

export default CollectionContextProvider;