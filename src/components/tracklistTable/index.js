import React, { Component } from 'react'
import { Table, List } from 'semantic-ui-react'
import GetBPM from '../getBPM'

class TrackListTable extends Component {   
constructor(props) {
        super(props);
        this.state = {            
            tracklisting : [this.props.tracklisting], 
            artistName: "" ,
            song: "",
            value: ""                                  
        }
    }      

    render() {
        console.log("record artist is:", this.props.artist);
        //console.log("Tracklisting Prop artist is:", this.props.tracklisting);
            
        return (        
        <Table celled color='yellow'>
            <Table.Header>
                <Table.Row textAlign='center'>                                    
                    <Table.HeaderCell>Side / Track Number </Table.HeaderCell>    
                    <Table.HeaderCell>Artist</Table.HeaderCell>                  
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Length</Table.HeaderCell>   
                   
                    <Table.HeaderCell>BPM / Tempo</Table.HeaderCell>                     
                </Table.Row>
            </Table.Header>     
                 
                 
            {this.props.tracklisting[0]?.tracklist?.map((song, index) => {
                return (                       
                    <Table.Body>     
                        <Table.Row key={index} textAlign='center'>                        
                            <Table.Cell color='yellow'>{song?.position}</Table.Cell> 
                        
                            <Table.Cell>
                                { Array.isArray(song?.artists) ?  song?.artists?.map((artiste,i) => (
                                    <List>
                                        <List.Item key={i}>
                                            <List.Icon  name='group' size='large' color='green'/>
                                            <List.Content>{artiste?.name} {artiste?.join}</List.Content>
                                        </List.Item> 
                                    </List>  
                                    )) :                                  
                                    <List key={index+1}> 
                                        <List.Item>
                                            <List.Icon  name='group' size='large' color='green'/>
                                            <List.Content>{this.props.artist}</List.Content>
                                        </List.Item>  
                                    </List>                            
                                } 
                            </Table.Cell>
                        
                            <Table.Cell>{song?.title}</Table.Cell> 
                            <Table.Cell>{song?.duration}</Table.Cell>
                            { Array.isArray(song?.artists) ?  song?.artists?.map((artiste,i) => (
                                i<1 ? 
                                <Table.Cell>
                                    <List>
                                        <List.Item key={i}>
                                            <GetBPM song={song?.title} artistName={artiste?.name}/> 
                                        </List.Item>
                                    </List>
                                </Table.Cell> : <p></p>
                                    )) :  
                                    <Table.Cell>
                                        <List key={index+1}> 
                                            <List.Item>
                                            <List.Content>
                                                <GetBPM song={song?.title} artistName={this.props.artist}/>
                                            </List.Content>
                                            </List.Item>  
                                        </List>    
                                    </Table.Cell>  
                                } 
                                
                        </Table.Row>    
                    </Table.Body>            
                )}
            )}      
        </Table>                    
        );
    }}       
       
    
    
export default TrackListTable;
