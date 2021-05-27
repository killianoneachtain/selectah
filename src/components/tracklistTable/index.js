import React, { Component } from 'react'
import { Table, List, Header, Icon, Button, Popup } from 'semantic-ui-react'
import SongSelection from '../songSelection'

class TrackListTable extends Component {   
constructor(props) {
        super(props);
        this.state = {            
            tracklisting : [this.props.tracklisting],  
            trackAnalytics: [this.props.trackAnalytics]          
        }
    }      

    render() { 
        //console.log("trackAnalytics State : ", this.state.trackAnalytics)
        //console.log("trackAnalytics Props : ", this.props.trackAnalytics)
        return (  
            
        <Table celled color='yellow'>
            <Table.Header>
                <Table.Row textAlign='center'>                                    
                    <Table.HeaderCell><Icon name='th list' size='large' />Side / Track Number </Table.HeaderCell>    
                    <Table.HeaderCell><Icon name='users' size='large' />Artist</Table.HeaderCell>                  
                    <Table.HeaderCell><Icon name='th list' size='large' />Title</Table.HeaderCell>
                    <Table.HeaderCell><Icon name='time' size='large' />Length</Table.HeaderCell>
                    <Table.HeaderCell>
                        <Popup 
                            content={<List>
                                <List.Item>
                                    <Icon name='music' size='large' color='yellow' />
                                    <List.Content>User BPM</List.Content>
                                </List.Item>
                                <List.Item>
                                    <Icon name='music' size='large' color='green' />
                                    <List.Content>Universal BPM</List.Content>
                                </List.Item>
                                <List.Item>
                                    <Icon name='music' size='large' color='red' />
                                    <List.Content>No Data</List.Content>
                                </List.Item>
                                </List>} 
                            trigger={<Button icon='music' size='large'  />} 
                            /> BPM / Tempo
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>             
                 
            {this.props.tracklisting[0]?.tracklist?.map((song,index) =>  {                                
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

                            { Array.isArray(this.props.trackAnalytics[0][index])  ? 
                             [Array.isArray(song?.artists) ?  song?.artists?.map((artiste,i) => (
                                i<1 ? 
                                <Table.Cell>
                                    <List>
                                        <List.Item key={artiste?.id}>
                                            <SongSelection 
                                                releaseID={this.props.releaseID} 
                                                releaseTitle={this.props.tracklisting[0]?.title} 
                                                song={song?.title} artistName={artiste?.name} 
                                                trackNumber={song?.position} />                                           
                                        </List.Item>
                                    </List>
                                </Table.Cell> : <p></p>
                                    )) :  
                                    <Table.Cell>
                                        <List> 
                                            <List.Item key={song?.id}>
                                            <List.Content>
                                                <SongSelection 
                                                    releaseID={this.props.releaseID} 
                                                    releaseTitle={this.props.tracklisting[0]?.title}  
                                                    song={song.title} 
                                                    artistName={this.props.artist} 
                                                    trackNumber={song.position}/>                                                
                                            </List.Content>
                                            </List.Item>  
                                        </List>    
                                    </Table.Cell>  
                             ]:    
                                 <Table.Cell>
                                        <List> 
                                            <List.Item key={song.position}>                                              
                                                {                                                   
                                                  this.props.trackAnalytics[0][index]?.users?.includes(this.props.userID) || this.props.trackAnalytics[0][index]?.users[0] === '***ALL***' ?                                                     
                                               [ 
                                                   this.props.trackAnalytics[0][index]?.users[0] === '***ALL***' ? 
                                                    <List.Content>
                                                        <List.Icon name='music' size='large' color='green' />                                                
                                                            <Header as='h2' content={this.props.trackAnalytics[0][index]?.BPM} />                                                            
                                                        </List.Content>
                                                            :  
                                                        <List.Content>
                                                        <List.Icon name='music' size='large' color='yellow' /> 

                                                        <Header as='h2' content={this.props.trackAnalytics[0][index]?.BPM} />

                                                        
                                                        {
                                                            Array.isArray(song?.artists) ? song?.artists?.map((artiste,i) => (
                                                                i<1 ? 
                                                                    <List.Item key={artiste?.id}>                                                           
                                                                        <SongSelection 
                                                                            analysisID={this.props.trackAnalytics[0][index]?._id} 
                                                                            releaseID={this.props.releaseID} 
                                                                            releaseTitle={this.props.tracklisting[0]?.title} 
                                                                            song={song?.title} artistName={artiste?.name} 
                                                                            trackNumber={song?.position}
                                                                            color='yellow'
                                                                            content='Edit BPM' 
                                                                            icon='edit'
                                                                            updateAnalytics={this.props.updateAnalytics} 
                                                                            />                                           
                                                                    </List.Item>                                                               
                                                            : <p></p>
                                                                )) :
                                                                    <List.Item key={song?.id}>
                                                                        <SongSelection 
                                                                            analysisID={this.props.trackAnalytics[0][index]?._id}
                                                                            releaseID={this.props.releaseID} 
                                                                            releaseTitle={this.props.tracklisting[0]?.title}  
                                                                            song={song?.title} artistName={this.props.artist} 
                                                                            trackNumber={song?.position}
                                                                            color='yellow'
                                                                            content='Edit BPM' 
                                                                            icon='edit'
                                                                            updateAnalytics={this.props.updateAnalytics} 
                                                                            />     
                                                                    </List.Item>                                                                    
                                                        }
                                                    </List.Content> 
                                                ] :
                                                [
                                                    Array.isArray(song?.artists) ? song?.artists?.map((artiste,i) => (
                                                        i<1 ? 
                                                    
                                                        <List>
                                                            <List.Item key={artiste?.id}>   
                                                                                                                 
                                                                <SongSelection 
                                                                    analysisID={this.props.trackAnalytics[0][index]?._id} 
                                                                    releaseID={this.props.releaseID} 
                                                                    releaseTitle={this.props.tracklisting[0]?.title} 
                                                                    song={song?.title} artistName={artiste?.name} 
                                                                    trackNumber={song?.position} 
                                                                    color='green'
                                                                    content='Get BPM' 
                                                                    icon='plus'
                                                                    updateAnalytics={this.props.updateAnalytics} 
                                                                    />                                           
                                                            </List.Item>
                                                        </List>
                                                    : <p></p>
                                                        )) :                                                         
                                                            <List> 
                                                                <List.Item key={song?.id}>
                                                                <List.Content>
                                                                    
                                                                    <SongSelection 
                                                                        analysisID={this.props.trackAnalytics[0][index]._id}
                                                                        releaseID={this.props.releaseID} 
                                                                        releaseTitle={this.props.tracklisting[0]?.title}  
                                                                        song={song?.title} artistName={this.props.artist} 
                                                                        trackNumber={song?.position}
                                                                        color='green'
                                                                        content='Get BPM'
                                                                        icon='plus'
                                                                        updateAnalytics={this.props.updateAnalytics}  
                                                                        />                                                
                                                                </List.Content>
                                                                </List.Item>  
                                                            </List>
                                                 ]
                                                }                              
                                           </List.Item>
                                        </List>    
                                    </Table.Cell>   
                                } 
                            </Table.Row>    
                        </Table.Body>                                      
                    )})  
            }  
        </Table>                    
        );
    }}   
    
export default TrackListTable;

/*
{ !Array.isArray(song?.BPM) ? 
                             [Array.isArray(song?.artists) ?  song?.artists?.map((artiste,i) => (
                                i<1 ? 
                                <Table.Cell>
                                    <List>
                                        <List.Item key={artiste?.id}>
                                            <SongSelection releaseID={this.props.releaseID} releaseTitle={this.props.tracklisting[0]?.title} song={song?.title} artistName={artiste?.name} trackNumber={song?.position} />                                           
                                        </List.Item>
                                    </List>
                                </Table.Cell> : <p></p>
                                    )) :  
                                    <Table.Cell>
                                        <List> 
                                            <List.Item key={song?.id}>
                                            <List.Content>
                                                <SongSelection releaseID={this.props.releaseID} releaseTitle={this.props.tracklisting[0]?.title}  song={song?.title} artistName={this.props.artist} trackNumber={song?.position}/>                                                
                                            </List.Content>
                                            </List.Item>  
                                        </List>    
                                    </Table.Cell>  
                             ]:    
                                 <Table.Cell>
                                        <List> 
                                            <List.Item key={song?.id}>
                                              
                                                {song?.BPM?.map((bpm,i) => (                                                    
                                                     this.props.userID === bpm.user || bpm.user === '***ALL***' ?                                                     
                                               [ bpm?.user === '***ALL***' ? 
                                               <List.Content>
                                                <List.Icon name='music' size='large' color='green' />
                                                <Header as='h2' content={bpm?.BPM} />
                                                </List.Content>
                                                    :  
                                                    <List.Content>
                                                    <List.Icon name='music' size='large' color='yellow' /> 
                                                    <Header as='h2' content={bpm?.BPM} />
                                                    <Button 
                                                        content='Edit BPM'
                                                        color='yellow' />  
                                                        </List.Content> ] :
                                                <List.Content>
                                                    <List.Icon name='music' size='large' color='RED' /> 
                                                        <Header as='h2' content='No DATA'/>   
                                                </List.Content>
                                                ))}                                           
                                                                               
                                           </List.Item>
                                        </List>    
                                    </Table.Cell>   }   
*/