import React from 'react'
import discogsLogo from "../../../src/images/discogs_logo.png"
import spotifyLogo from "../../../src/images/Spotify_Logo_CMYK_Green.png"
//import records from "../../../src/images/recordspines_copy.png"
import {  Menu, Image } from 'semantic-ui-react'

const Footer = () => {
return (
            <Menu
            inverted
            color="yellow"
            borderless
            style={{
            flexShrink: 0, //don't allow flexbox to shrink it
            borderRadius: 0, //clear semantic-ui style
            margin: 0 //clear semantic-ui style
            }}>
                <Menu.Item                
                header>                               
                    <Image 
                    size='medium' 
                    src={discogsLogo} 
                    as='a'
                    href='https://discogs.com'
                    alt="dLogo"
                    floated='left'
                    verticalAlign='middle'                                              
                    />
                    <Menu.Menu>
                      <Image 
                    size='medium' 
                    src={spotifyLogo} 
                    as='a'
                    href='https://spotify.com'
                    alt="dLogo"
                    floated='right' 
                    position='right'                                             
                    /></Menu.Menu>
                </Menu.Item>
            </Menu>
)
}
 export default Footer