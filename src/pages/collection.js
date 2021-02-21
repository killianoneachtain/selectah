import React from 'react'
import discogsLogo from "../../src/images/discogs_logo.png"
import '../components/frontPage/frontPage.css'
import {  Table, Segment, Image, Dimmer } from 'semantic-ui-react'
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';
import ListingAccordion from '../../src/components/trackListing'

const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
            return (
                promiseInProgress && 
            <Table.Body>      
                <Table.Row key='1' textAlign='center'>                      
                        <Table.Cell colSpan='9'>
                            <Dimmer active>
                                <Loader type="ThreeDots" color="#F5DF2E" height="200" width="200" />
                            </Dimmer>
                        </Table.Cell>                 
                </Table.Row>  
            </Table.Body> 
           );  
          }

class Collection extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                collection :[],
                isLoading: true
                
            }
        }
        
        componentDidMount() {
            trackPromise(
            fetch('/user/collection')
            .then(res => res.json())   
            .then(collection => this.setState({collection, isLoading:false}, () => console.log('Data fetched ....', collection))) )
                    
        }

        render()
        {           
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
                 
                  <LoadingIndicator/>  
                {this.state.collection.map((item, index) =>                   
                   <Table.Body key={index}>   
                        <Table.Row key={index} textAlign='center'>                                              
                            <Table.Cell>{index+1}</Table.Cell>                            
                            <Table.Cell><Image alt="" src={item?.basic_information?.thumb} size='tiny' /></Table.Cell> 
                            <Table.Cell>{item?.basic_information?.artists[0]?.name}</Table.Cell> 
                            <Table.Cell>{item?.basic_information?.title}</Table.Cell> 

                            <Table.Cell>{item?.basic_information?.formats[0]?.name}</Table.Cell> 
                            
                            <Table.Cell>{item?.basic_information?.formats[0]?.qty}</Table.Cell> 
                            <Table.Cell>{item.basic_information?.formats[0]?.descriptions?.join(', ')}</Table.Cell> 
                            <Table.Cell>{item?.basic_information?.genres?.join(",")}</Table.Cell>  
                            <Table.Cell>{item?.basic_information?.styles?.join(",")}</Table.Cell>                        
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
}

export default Collection;