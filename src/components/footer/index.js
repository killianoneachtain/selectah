import React from 'react'
import discogsLogo from "../../../src/images/discogs_logo.png"
import spotifyLogo from "../../../src/images/Spotify_Logo_CMYK_Green.png"
//import records from "../../../src/images/recordspines_copy.png"
import selectahLogo from '../../../src/images/sel2_logo_tp.png'
import {  Menu, Image, Header } from 'semantic-ui-react'

const Footer = () => {
return (
            <Menu
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
               <Menu.Menu position='left'>
                <Menu.Item >        
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
                    
                    </Menu.Menu> 
                    <Menu.Menu position='right'>
                      <Menu.Item>
                      <Header as='h3' content='Powered by :' /></Menu.Item>
                    <Menu.Item >                       
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
                    </Menu.Menu>
                
            </Menu>
)
}
 export default Footer