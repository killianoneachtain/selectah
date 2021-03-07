import React from 'react'
import records from "../../../src/images/recordspines_copy.png"
import {  Table, Segment, Header,Image } from 'semantic-ui-react'
import ListingAccordion from '../trackListing'
import '../collectionList'

const CollectionListPage = ({collection, action}) => {   
    
        return (
                <Segment  
                style={{                        
                    backgroundImage: `url("${records}")`}}  >    
                    <Header as='h1'>Selectah</Header>  
                    <Header as='h2'>Killian's Music Collection</Header>
        <Table 
        stackable              
        striped 
        fixed
        size='large'>
            <Table.Header >
            <Table.Row textAlign='center'> 
                    <Table.HeaderCell></Table.HeaderCell>
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
                        <Table.Row textAlign='center' style={{background:'#F0EEEC'}}>                                             
                            <Table.Cell>
                                <Image alt="" src={item?.basic_information?.thumb} 
                                size='small'
                                floated='left'
                                padding-left='10'
                                />
                            </Table.Cell> 
                            <Table.Cell>{item?.basic_information?.artists[0]?.name}</Table.Cell> 
                            <Table.Cell>{item?.basic_information?.title}</Table.Cell> 

                            <Table.Cell>{item?.basic_information?.formats[0]?.name}</Table.Cell> 
                            
                            <Table.Cell>{item?.basic_information?.formats[0]?.qty}</Table.Cell> 
                            <Table.Cell>{item.basic_information?.formats[0]?.descriptions?.join(', ')}</Table.Cell> 
                            <Table.Cell>{item?.basic_information?.genres?.join(", ")}</Table.Cell>  
                            <Table.Cell>{item?.basic_information?.styles?.join(", ")}</Table.Cell>                        
                            <Table.Cell>{item?.id}</Table.Cell> 
                        </Table.Row>                            
                        <Table.Row key={index+1} textAlign='center'>
                            <Table.HeaderCell colSpan='9'>
                                <ListingAccordion release={item.id} artist={item?.basic_information?.artists[0]?.name}/>
                            </Table.HeaderCell>  
                        </Table.Row>        
                    </Table.Body>  
                )}              
            </Table>  
        </Segment>   
        );
        }


export default CollectionListPage;
