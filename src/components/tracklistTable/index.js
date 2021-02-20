import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'

class TrackListTable extends Component {   

constructor(props) {
        super(props);
        this.state = {            
            tracklisting : [this.props.tracklisting]
        }
    }  



render() {
    console.log("TRACK LISTING PROPS",this.props.tracklisting);
        console.log("tracklisting in tracklistTable is :", this.state.tracklisting);
    
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

                    
                {this.props.tracklisting[0].map((song, index) => {
                    return (
                   <Table.Body key={index} >
                    <Table.Row textAlign='center'>                        
                        <Table.Cell>{song?.position}</Table.Cell> 
                        <Table.Cell>{song?.artists?.join(",")}</Table.Cell> 
                        <Table.Cell>{song?.title}</Table.Cell> 
                        <Table.Cell>{song?.duration}</Table.Cell> 
                        <Table.Cell><Button basic color='orange'>
                            Get BPM
                            </Button></Table.Cell> 
                    </Table.Row>
                  </Table.Body>)
                }   )}          
            </Table>
         
            );
    }
}

export default TrackListTable;
