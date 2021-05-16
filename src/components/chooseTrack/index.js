import React, {Component} from 'react'
import { Table, Image, Embed, Header, Button, Icon, Segment, Popup, List } from 'semantic-ui-react'
import SpotifyLogo from '../../images/Spotify_Icon_RGB_Green.png'
import { CollectionContext } from '../../contexts/collectionContext'

class ChooseTrack extends Component{
    constructor(props) {
        super(props);       
        this.state = {            
            songs : [this.props.songs],
            track : [],
            userID: "",
            success: [{ Success: false }] ,   
            trackAnalytics: []        
        }
    }
    
    static contextType  = CollectionContext
    componentDidMount() {
      const collectn = this.context     
      this.setState({userID: collectn.userID})
    }
    
    handleClick = async (e) => {   
       
        await fetch(`/song/${this.state.userID}/${this.state.track[1].artist.replace("/","%2F")}/${this.state.track[2].album.replace("/","%2F")}/${this.state.track[3].title.replace("/","%2F")}/${this.state.track[0].id}/${this.props.analysisID}`)
            .then(res => res.json()) 
            .then(success => this.setState({success}))           
            
        if(this.state.success.Success === true)
        {             
            await fetch(`/user/release/trackAnalysis/${this.props.releaseID}`)
            .then(res => res.json())   
            .then(trackAnalytics => this.setState({trackAnalytics}))                   
            //.then(this.props.updateAnalytics([this.state.trackAnalytics]))
            .then(this.props.closeModal)   
            
            this.props.updateAnalytics(this.state.trackAnalytics)
            //updateAnalytics={this.props.updateAnalytics} 
            
        }  
      }
      
  
render(){
       
    console.log("trackAnalyses after match is :", this.state.trackAnalytics)  
    return ( 
        <Segment> 
                        
            {
                ((this.props.songs?.total != null) && (this.props.songs.total>0))? 
                    this.props.songs.items.map((track) => 
                        <Table fixed selectable stackable size='large'>
                            <Table.Header >                           
                                <Table.Row textAlign='center' key={track.album.id}>    
                                    <Table.HeaderCell />                    
                                    <Table.HeaderCell><Icon name='users' size='large' color='green'/> Artist</Table.HeaderCell>                                               
                                    <Table.HeaderCell><Icon name='th list' size='large' color='green'/> Album Title</Table.HeaderCell>                        
                                    <Table.HeaderCell><Icon name='tag' size='large' color='green' /> Type</Table.HeaderCell>
                                    <Table.HeaderCell><Icon name='ordered list' size='large' color='green'/> Track </Table.HeaderCell>
                                    <Table.HeaderCell><Icon name='unordered list' size='large' color='green' /> Track Name</Table.HeaderCell>
                                    <Table.HeaderCell><Image src={SpotifyLogo} centered size='mini'/></Table.HeaderCell>
                                    <Table.HeaderCell></Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>               
        
                            <Table.Body>
                                <Table.Row textAlign='center' key={track.uri}>
                                    <Table.Cell>
                                        <Image
                                            src={track.album.images[1].url}
                                            size='small'
                                            />
                                    </Table.Cell>
                                    <Table.Cell content={track?.album?.artists[0]?.name}/>
                                    <Table.Cell content={track?.album?.name} />
                                    <Table.Cell content={track?.album?.album_type?.charAt(0).toUpperCase()+track?.album?.album_type.substring(1)} />
                                    <Table.Cell content={track?.track_number} />
                                    <Table.Cell content={track?.name} />
                                    <Table.Cell> 
                                        <Embed
                                            icon='play circle outline'
                                            placeholder={SpotifyLogo}                                                                                                         
                                            url={track?.preview_url}
                                            source='spotify'
                                        />
                                    </Table.Cell>
                                    <Table.Cell> 
                                    <Popup 
                                        content={
                                            <List>
                                            <List.Item>
                                                <Icon name='music' size='large' color='yellow' />
                                                <List.Content>Assign the BPM of this track to
                                               <Header as='h3'> {this.props.artistName}<br></br>
                                                {this.props.song}</Header>
                                                      </List.Content>
                                            </List.Item>                                            
                                            </List>} 
                                        trigger={ <Button
                                            size='big'
                                            fluid                                                                                      
                                            onClick={() => (this.setState({ track: [{id: track?.id},{artist: track?.album?.artists[0]?.name},{album: track?.album?.name},{title: track?.name}, ] }, this.handleClick))}                                            
                                            color='yellow'
                                            icon='thumbs up'  />     }                             
                                        />                                           
                                    </Table.Cell>
                                </Table.Row>   
                            </Table.Body>
                        </Table> )
                        : 
                        <Header as='h1'
                                colSpan='8' 
                                size='large' 
                                color='red'
                                textAlign='center'
                                content='No Track Information Available from Spotify.'
                        />           
                }                    
                  
               </Segment>         
      
      )}
}

export default ChooseTrack;