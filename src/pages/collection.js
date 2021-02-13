import React from 'react'
import discogsLogo from "../../src/images/discogs_logo.png"
import '../components/frontPage/frontPage.css'
import {  Table } from 'semantic-ui-react'
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';


const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
            return (
                promiseInProgress && 
        <Table.Row textAlign='center'>                      
                <Table.Cell><Loader type="ThreeDots" color="#F5DF2E" height="75" width="75" /></Table.Cell> 
                <Table.Cell><Loader type="ThreeDots" color="#F5DF2E" height="75" width="75" /></Table.Cell> 
                <Table.Cell><Loader type="ThreeDots" color="#F5DF2E" height="75" width="75" /></Table.Cell> 
                <Table.Cell><Loader type="ThreeDots" color="#F5DF2E" height="75" width="75" /></Table.Cell> 
                <Table.Cell><Loader type="ThreeDots" color="#F5DF2E" height="75" width="75" /></Table.Cell> 
                <Table.Cell><Loader type="ThreeDots" color="#F5DF2E" height="75" width="75" /></Table.Cell> 
                <Table.Cell><Loader type="ThreeDots" color="#F5DF2E" height="75" width="75" /></Table.Cell> 
                <Table.Cell><Loader type="ThreeDots" color="#F5DF2E" height="75" width="75" /></Table.Cell>                        
                <Table.Cell><Loader type="ThreeDots" color="#F5DF2E" height="75" width="50" /></Table.Cell> 
        </Table.Row> 
                          
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
                            
            <div className="welcome-wrapper">  
            <div>
                <h1>Selectah</h1>  
                <h2>Killian's your music collection.</h2>
            </div>   
            <div>  
          
            <Table stackable>
            <Table.Header>
            <Table.Row textAlign='center'>               
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell>Artwork</Table.HeaderCell>
                    <Table.HeaderCell>Artist</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Format</Table.HeaderCell>
                    <Table.HeaderCell>Number of Discs</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Genre</Table.HeaderCell>
                    <Table.HeaderCell>ID</Table.HeaderCell>                
            </Table.Row>
        </Table.Header> 
            <Table.Body>        
                  <LoadingIndicator/>  
                {this.state.collection.map((item, index) =>                   
                      <Table.Row key={index} textAlign='center'>                      
                            <Table.Cell>{index+1}</Table.Cell> 
                            <Table.Cell><img alt="" src={item?.basic_information?.thumb}></img></Table.Cell> 
                            <Table.Cell>{item?.basic_information?.artists[0]?.name}</Table.Cell> 
                            <Table.Cell>{item?.basic_information?.title}</Table.Cell> 
                            <Table.Cell>{item?.basic_information?.formats[0]?.name}</Table.Cell> 
                            <Table.Cell>{item?.basic_information?.formats[0]?.qty}</Table.Cell> 
                            <Table.Cell>{item.basic_information?.formats[0]?.descriptions?.join(', ')}</Table.Cell> 
                            <Table.Cell>{item?.basic_information?.genres?.join(",")}</Table.Cell>                        
                            <Table.Cell>{item?.id}</Table.Cell> 
                    </Table.Row>             
                )}
            
            
            </Table.Body> 

            
            </Table>   
                
            
        
            </div>      
        
            <div>
            <img className='logo' src={discogsLogo} alt="Logo"/>
            </div>    
        </div>  
        
        );
        }
}

export default Collection;