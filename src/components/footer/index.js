
import React, { useContext, useEffect, useState } from "react"
import {CollectionContext} from '../../contexts/collectionContext'
import selectahLogo from '../../images/sel2_logo_tp.png'
import { getPages} from '../../api/Discogs_api'
import discogsLogo from "../../../src/images/discogs_logo.png"
import spotifyLogo from "../../../src/images/Spotify_Logo_CMYK_Green.png"
import {  Menu, Image } from 'semantic-ui-react'
import PaginationCollection from '../pagination'
import { useAuth0 } from '../../../node_modules/@auth0/auth0-react'


const Footer = () => {  

  const context = useContext(CollectionContext)

  const { isAuthenticated } =  useAuth0()

  const [data,setData]  = useState([])
  const getData= async (userName, perPage, orderBy)=>{   
    const response = await getPages(userName,perPage,orderBy)    
    setData(response)    
  }
  useEffect(()=>{
    getData(context.userName, context.perPage, context.orderBy)
  },[context])  

  

return (
  isAuthenticated ?
            <Menu
            stackable
            inverted            
            color="yellow"
            borderless
            style={{
            flexShrink: 0, //don't allow flexbox to shrink it
            borderRadius: 0, //clear semantic-ui style
            margin: 0, //clear semantic-ui style,
            position: 'fixed', 
            bottom: 0,
            left: 0,
            width: '100%'         
            }}>
               
                <Menu.Item fluid stackable>        
                 <Image 
                    size='medium' 
                    src={selectahLogo} 
                    as='a'
                    href='https://selectah.vercel.app'
                    alt="selectahLogo"
                    floated='right'
                    verticalAlign='middle'
                    style={{paddingBottom: '15px'}}                                              
                    />  
                    </Menu.Item>  
                    <Menu.Item fluid>                    
                     <PaginationCollection pageData={data} use="bottom" /> 
                    </Menu.Item>
                    
                   
                   
                    
                    <Menu.Item fluid>                       
                    <Image 
                    size='medium' 
                    src={discogsLogo} 
                    as='a'
                    href='https://discogs.com'
                    alt="dLogo"
                    floated='right'
                    verticalAlign='middle'                                              
                    />
                   
                      </Menu.Item>
                      <Menu.Item >     
                      <Image 
                    size='medium' 
                    src={spotifyLogo} 
                    as='a'
                    href='https://spotify.com'
                    alt="dLogo"
                    floated='right' 
                    position='right'                                             
                    />
                    </Menu.Item>
                   
                
            </Menu> : <Menu></Menu>
)
}
 export default Footer