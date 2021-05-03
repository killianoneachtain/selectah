import React, { Component } from 'react'
import { Table, List, Header, Icon } from 'semantic-ui-react'
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
                    <Table.HeaderCell><Icon name='th list' size='large' />Side / Track Number </Table.HeaderCell>    
                    <Table.HeaderCell><Icon name='users' size='large' />Artist</Table.HeaderCell>                  
                    <Table.HeaderCell><Icon name='th list' size='large' />Title</Table.HeaderCell>
                    <Table.HeaderCell><Icon name='time' size='large' />Length</Table.HeaderCell>
                    <Table.HeaderCell><Icon name='music' size='large' />BPM / Tempo</Table.HeaderCell>
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
                            { !Array.isArray(song?.BPM) ? 
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
                                                <List.Icon name='music' size='large' color='yellow' />    
                                                {song?.BPM?.map((bpm,i) => (                                                    
                                                     this.props.userID === bpm.user ?
                                                    
                                                    <Header as='h2' content={bpm?.BPM} />    :
                                                    <Header as='h2' content='Hello'/>   

                                                ))}                                            
                                                                               
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
