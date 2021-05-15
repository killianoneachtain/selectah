import React, { useContext, useEffect, useState } from "react";
import PageTemplate from '../components/templateCollectionPage'
import {CollectionContext} from '../contexts/collectionContext'
import { Segment, Image } from 'semantic-ui-react'
import selectahLogo from "../images/selLogo_trip_space.png"
import { getPages} from '../api/Discogs_api'

const CollectionListPage = () => {
  const context = useContext(CollectionContext);

  const [data,setData]  = useState([])
  const getData= async (userName)=>{
   
    const response = await getPages(userName)    
    setData(response)    
  }
  useEffect(()=>{
    getData(context.userName)
  },[context])  

  return (
    <Segment>
      <Image src={selectahLogo} fluid centered style={{paddingBottom: '20px'}}/>         
        <PageTemplate 
          title='My Collection'
          collection={context.collection}
          pages={data} 
        />         
      </Segment> 
  );
};

export default CollectionListPage;