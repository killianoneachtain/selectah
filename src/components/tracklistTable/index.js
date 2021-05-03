import React, { Component } from 'react'
import { Table, List } from 'semantic-ui-react'
//import GetBPM from '../getBPM'
import SongSelection from '../songSelection'

class TrackListTable extends Component {   
constructor(props) {
        super(props);
        this.state = {            
            tracklisting : [this.props.tracklisting]
        }
    }      

    render() {
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
                 
                 
            {this.props.tracklisting[0]?.tracklist?.map((song) => {
                
                return (                       
                    <Table.Body>     
                        <Table.Row key={song?.position} textAlign='center'>                        
                            <Table.Cell color='yellow'>{song?.position}</Table.Cell>                         
                            <Table.Cell>
                                { Array.isArray(song?.artists) ?  song?.artists?.map((artiste,i) => (
                                    <List>
                                        <List.Item key={artiste?.id}>
                                            <List.Icon  name='group' size='large' color='green'/>
                                            <List.Content>{artiste?.name} {artiste?.join}</List.Content>
                                        </List.Item> 
                                    </List>  
                                    )) :                                  
                                    <List> 
                                        <List.Item key={song?.id}>
                                            <List.Icon  name='group' size='large' color='green'/>
                                            <List.Content>{this.props.artist}</List.Content>
                                        </List.Item>  
                                    </List>                            
                                } 
                            </Table.Cell>                        
                            <Table.Cell>{song?.title}</Table.Cell> 
                            <Table.Cell>{song?.duration}</Table.Cell>
                            { song?.BPM == null ? 
                             [Array.isArray(song?.artists) ?  song?.artists?.map((artiste,i) => (
                                i<1 ? 
                                <Table.Cell>
                                    <List>
                                        <List.Item key={artiste?.id}>
                                            <SongSelection song={song?.title} artistName={artiste?.name} trackNumber={song?.position}/>                                           
                                        </List.Item>
                                    </List>
                                </Table.Cell> : <p></p>
                                    )) :  
                                    <Table.Cell>
                                        <List> 
                                            <List.Item key={song?.id}>
                                            <List.Content>
                                                <SongSelection song={song?.title} artistName={this.props.artist} trackNumber={song?.position}/>                                                
                                            </List.Content>
                                            </List.Item>  
                                        </List>    
                                    </Table.Cell>  
                             ]:    
                                 <Table.Cell>
                                        <List> 
                                            <List.Item key={song?.id}>
                                            <List.Content>
                                                {song?.BPM}                                            
                                            </List.Content>
                                            </List.Item>  
                                        </List>    
                                    </Table.Cell>   }                         
                        </Table.Row>    
                    </Table.Body>            
                )}                
            )}      
        </Table>                    
        );
    }}   
    
export default TrackListTable;
