import React, { useEffect, createContext, useReducer, useState } from "react";
import { getCollection } from "../api/Discogs_api";
import {  Table, Segment, Dimmer } from 'semantic-ui-react'
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

export const CollectionContext = createContext(null);

const LoadingTracklistingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
          return (
              promiseInProgress && 
          <Segment>
            <Table.Body>      
              <Table.Row textAlign='center'>                      
                      <Table.Cell colSpan='1'>
                      <Dimmer active>
                              <Loader type="ThreeDots" color="#F5DF2E" height="150" width="150" />
                          </Dimmer>
                      </Table.Cell>                 
              </Table.Row>  
            </Table.Body> 
          </Segment>
         );  
        }


const reducer = (state, action) => {
  switch (action.type) {   

    case "load-collection":   
    <LoadingTracklistingIndicator />   
      return { collection: [...action.payload.collection.releases] };    
           
    default:
      return state;
  }
};

const CollectionContextProvider = (props) => {
  const LoadingTracklistingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
            return (
                promiseInProgress && 
            <Segment>
              <Table.Body>      
                <Table.Row textAlign='center'>                      
                        <Table.Cell colSpan='1'>
                        <Dimmer active>
                                <Loader type="ThreeDots" color="#F5DF2E" height="150" width="150" />
                            </Dimmer>
                        </Table.Cell>                 
                </Table.Row>  
              </Table.Body> 
            </Segment>
           );  
          }
  
  const [state, dispatch] = useReducer(reducer, { collection: [] }); 
  const [ pageNumber, setPageNumber] = useState(1);  

  const [accessToken, setAccessToken] = useState("");

  const [userSub, setUserSub] = useState("");
  const [userName, setUserName] = useState("undefined");
  const [userId, setUserId ] = useState(0);

  const [pages, setPages] = useState([ {
    page: 1,
    pages: 1,
    per_page: 50,
    items: 1,
    urls: {
    last: "https://api.discogs.com/",
    next: "https://api.discogs.com/"
    }
    }]);

  useEffect(() => {    
    trackPromise(getCollection(pageNumber, userName).then((collection) => {
      dispatch({ type: "load-collection", payload: { collection } });
    }));       
  }, [pageNumber, userName]);

  return (
    
    <CollectionContext.Provider
      value={{
        collection: state.collection,       
        setPageNumber,
        pageNumber,
        pages: pages,
        setPages,   
        userName: userName,
        setUserName,
        userId: userId,
        setUserId,
        userSub: userSub,
        setUserSub,
        accessToken: accessToken,
        setAccessToken 
      }}
    >
      {props.children}
      <LoadingTracklistingIndicator />
    </CollectionContext.Provider>
  );
};

export default CollectionContextProvider;