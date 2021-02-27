import React from 'react'
import discogsLogo from "../../../src/images/discogs_logo.png"
import {  Table, Segment, Image } from 'semantic-ui-react'
import ListingAccordion from '../trackListing'

const CollectionListPage = ({collection, action}) => {     
        
            return (
                <Segment>         
            <div className="welcome-wrapper">  
                <div>
                    <h1>Selectah</h1>  
                    <h2>Killian's Music Collection</h2>
                </div>   
                    <div> 
            <Table stackable striped size='large'>
            <Table.Header >
            <Table.Row textAlign='center'>   
                            
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell>Artwork</Table.HeaderCell>
                    <Table.HeaderCell>Artist</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Format</Table.HeaderCell>
                    <Table.HeaderCell>Number of Discs</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Genre</Table.HeaderCell>
                    <Table.HeaderCell>Styles</Table.HeaderCell>
                    <Table.HeaderCell>ID</Table.HeaderCell>                
            </Table.Row>
        </Table.Header> 
                 
                  
                {collection.map((item, index) =>                   
                   <Table.Body key={index}>   
                        <Table.Row key={index} textAlign='center'>                                              
                            <Table.Cell>{index+1}</Table.Cell>                            
                            <Table.Cell><Image alt="" src={item?.basic_information?.thumb} size='tiny' /></Table.Cell> 
                            <Table.Cell>{item?.basic_information?.artists[0]?.name}</Table.Cell> 
                            <Table.Cell>{item?.basic_information?.title}</Table.Cell> 

                            <Table.Cell>{item?.basic_information?.formats[0]?.name}</Table.Cell> 
                            
                            <Table.Cell>{item?.basic_information?.formats[0]?.qty}</Table.Cell> 
                            <Table.Cell>{item.basic_information?.formats[0]?.descriptions?.join(', ')}</Table.Cell> 
                            <Table.Cell>{item?.basic_information?.genres?.join(", ")}</Table.Cell>  
                            <Table.Cell>{item?.basic_information?.styles?.join(", ")}</Table.Cell>                        
                            <Table.Cell>{item?.id}</Table.Cell> 
                        </Table.Row>  
                          
                        <Table.Row key={item.id} textAlign='center'>
                            <Table.HeaderCell colSpan='10'>
                                <ListingAccordion release={item.id} artist={item?.basic_information?.artists[0]?.name}/>
                            </Table.HeaderCell>  
                        </Table.Row>        
                    </Table.Body>  
                )}
               
            </Table>   
            </div>  
            <div>
            <img className='logo' src={discogsLogo} alt="Logo"/>
            </div>    
        </div>  
        </Segment>   
        );
        }


export default CollectionListPage;

