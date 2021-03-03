import React, { Component } from 'react'
import { Table, Button, List } from 'semantic-ui-react'

class TrackListTable extends Component {   
constructor(props) {
        super(props);
        this.state = {            
            tracklisting : [this.props.tracklisting],                                     
        }
    }  

    render() {
        //console.log("TRACK LISTING PROPS",this.props.tracklisting);
        console.log("record artist is:", this.props.artist);
        
        return (
        
                <Table celled color='yellow' key='yellow'>
                    <Table.Header>
                    <Table.Row textAlign='center'>                                    
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
                            <Table.Cell color='yellow'>{song?.position}</Table.Cell> 
                            <Table.Cell>
                                <List>
                                { Array.isArray(song?.artists) ?  song?.artists?.map((artiste,i) => (
                                        <List.Item key={i}>
                                            <List.Icon  name='group' size='large' color='green'/>
                                            <List.Content>{artiste?.name} {artiste?.join}</List.Content>
                                        </List.Item>
                                        )) :   <List.Item key={index+1}>
                                        <List.Icon  name='group' size='large' color='green'/>
                                        <List.Content>{this.props.artist}</List.Content>
                                    </List.Item>
                                    } 
                                </List>
                            </Table.Cell>
                            
                            <Table.Cell>{song?.title}</Table.Cell> 
                            <Table.Cell>{song?.duration}</Table.Cell>  
                            <Table.Cell>
                                <Button 
                                basic color='orange'
                                content='Get BPM'
                                />
                               
                                </Table.Cell> 
                        </Table.Row>
                    </Table.Body>)
                    }   )}          
                </Table>                    
                );
        }
    }
export default TrackListTable;
