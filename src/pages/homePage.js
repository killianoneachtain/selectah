import React, { useContext, useEffect, useState } from "react";
import PageTemplate from '../components/templateCollectionPage'
import {CollectionContext} from '../contexts/collectionContext'
import { Segment, Image } from 'semantic-ui-react'
import Footer from '../components/footer'
import selectahLogo from "../images//selFont2.jpg"

const CollectionListPage = () => {
  const context = useContext(CollectionContext);

  const [data,setPages]=useState([]);

  const getData=()=>{
    fetch('/user/pages',{      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })   
    .then(function(response){
      
      return response.json();
    })
      .then(function(myJson) {       
        setPages(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])  

  return (
    <Segment>
      <Image src={selectahLogo} size='big' centered style={{paddingBottom: '20px'}}/>         
        <PageTemplate 
          title='My Collection'
          collection={context.collection}
          pages={data} 
        /> 
        <Footer/>    
      </Segment> 
  );
};

export default CollectionListPage;