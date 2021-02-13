import React from 'react';
import discogsLogo from "../../src/images/discogs_logo.png";
import '../components/frontPage/frontPage.css';
import {  Table } from 'semantic-ui-react'

class Collection extends React.Component {
        constructor() {
        super();
        this.state = {
        collection :[]
        }
        }

        componentDidMount() {
        fetch('/user/collection')
        .then(res => res.json())          
        .then(collection => this.setState({collection}, () => console.log('Data fetched ....', collection)))   

        }

        render(){
        return (
                         
        <div className="welcome-wrapper">  
        <div>
            <h1>Selectah</h1>  
            <h2>Killian's your music collection.</h2>
        </div>   
          <div>    
          <Table celled>
    <Table.Header>
        <Table.Row>
                <Table.HeaderCell>Artist</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Format</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Genre</Table.HeaderCell>
                <Table.HeaderCell>ID</Table.HeaderCell>
                
        </Table.Row>
    </Table.Header>

        <Table.Body>
        {this.state.collection.map(item => <Table.Row key={item.instance_id}>
                <Table.Cell>{item.basic_information.artists[0].name}</Table.Cell> 
                <Table.Cell>{item.basic_information.title}</Table.Cell> 
                <Table.Cell>{item.basic_information.formats[0].name}</Table.Cell> 
                <Table.Cell>{item.basic_information.formats[0].qty}</Table.Cell> 
                <Table.Cell>{item.basic_information.genres}</Table.Cell> 
                <Table.Cell>{item.id}</Table.Cell> 
        </Table.Row>)}
        
        
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