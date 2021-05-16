import React, {useContext} from 'react'
import records from "../../../src/images/recordspines_copy.png"
import {  Table, Segment, Image, Icon, Grid } from 'semantic-ui-react'
import PaginationCollection from '../pagination'
import ListingAccordion from '../trackListing'
import { CollectionContext } from '../../contexts/collectionContext'
import '../collectionList'

const CollectionTable = ({collection, pages,action}) => { 
    
    const Collection = useContext(CollectionContext);  
    
    return (
        <Segment style={{ backgroundImage: `url("${records}")`}} > 
            <Grid columns={16} divided>
                <Grid.Row>
                    <Grid.Column width={3}>    
                                  
                            {Collection.userName} :  
                            {pages.items} Releases 
                          
                    </Grid.Column>
                    <Grid.Column 
                        width={6}
                        stackable
                        inverted   
                        style={{ backgroundImage: `url("${records}")`, opacity: 1.2}}         
                        color="grey"
                        borderless >                  
                            <PaginationCollection pageData={pages} use='top' />
                     </Grid.Column>
                     <Grid.Column width='3'>
                        PerPage
                     </Grid.Column>
                     <Grid.Column width='3'>
                        Order By
                     </Grid.Column>
                </Grid.Row>    
                </Grid>              
       
          

            <Table 
                stackable 
                striped 
                fixed 
                size='large' 
                style={{paddingBottom:'100px'}}
                color='yellow'
                key='yellow'>
          
              <Table.Header>
                <Table.Row textAlign='center'> 
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell><Icon name='users' />Artist</Table.HeaderCell>
                    <Table.HeaderCell><Icon name='th list' />Title</Table.HeaderCell>
                    <Table.HeaderCell><Icon name='play circle' />Format</Table.HeaderCell>
                    <Table.HeaderCell><Icon name='clone' />Number of Discs</Table.HeaderCell>
                    <Table.HeaderCell><Icon name='unordered list' />Description</Table.HeaderCell>
                    <Table.HeaderCell><Icon name='th large' />Genre</Table.HeaderCell>
                    <Table.HeaderCell><Icon name='th' />Styles</Table.HeaderCell>                            
                </Table.Row>
              </Table.Header> 
                    
        {collection.map((item) =>                   
                   <Table.Body key={(item?.basic_information?.master_id - item?.id)}>   
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
                    </Table.Row>                            
                    <Table.Row key={item.id} textAlign='center'>
                        <Table.HeaderCell colSpan='8'>
                            <ListingAccordion release={item.id} artist={item?.basic_information?.artists[0]?.name} user_id={Collection.userID}/>
                        </Table.HeaderCell>  
                    </Table.Row>        
                </Table.Body>  
                )}              
            </Table>  
        </Segment>   
        );
        }

export default CollectionTable;


//GET /A%20Tribe%20Called%20Quest/The%20Anthology/I%20Left%20My%20Wallet%20In%20El%20Segundo 200 297.570 ms - 19065
//GET /A%20Tribe%20Called%20Quest/I%20Left%20My%20Wallet%20In%20El%20Segundo%20/%20Pubic%20Enemy/I%20Left%20My%20Wallet%20In%20El%20Segundo%20(Feature%20Length)