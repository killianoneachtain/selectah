import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'

class TrackListTable extends Component {

constructor(props) {
        super(props);
        this.state = {            
            tracklisting :[]
        }
    }    
    
  

render() {
    return (
            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Side / Track Number </Table.HeaderCell>
                    <Table.HeaderCell>Artist</Table.HeaderCell>        
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Length</Table.HeaderCell>
                    <Table.HeaderCell>BPM / Tempo</Table.HeaderCell>                     
                </Table.Row>
                </Table.Header>

                    
                {this.state.tracklisting.map((track, index) =>     
                  <Table.Body>                
                    <Table.Row key={index} textAlign='center'>   
                        <Table.Cell>{track?.position}</Table.Cell> 
                        <Table.Cell>{track?.artists?.name.join(', ')}</Table.Cell> 
                        <Table.Cell>{track?.title}</Table.Cell> 
                        <Table.Cell>{track?.duration}</Table.Cell> 
                        <Table.Cell><Button basic color='orange'>
                            Get BPM
                            </Button></Table.Cell> 
                    </Table.Row> 
                  </Table.Body>
                )}
             
            </Table>
            );
    }
}

export default TrackListTable;
