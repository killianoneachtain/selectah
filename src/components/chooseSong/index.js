import React, {Component} from 'react'
import { Table, Image, Embed, Header, Segment, Button } from 'semantic-ui-react'
import SpotifyLogo from '../../images/Spotify_Icon_RGB_Green.png'

class ChooseTrack extends Component{
    constructor(props) {
        super(props);       
        this.state = {            
            songs : [this.props.songs],
            track_id : ""           
        }
    }     
   
    handleClick = (e) => {    
        //console.log("TrackID sent to Spotify for Audio Analyis:", this.state.track_id);       
    
        fetch(`/song/${this.state.track_id}`)
            //.then(res => res.json()) 
      }
      
  
render(){ 
  /*  var total = this.props.songs.total;
    console.log("total", total);
    var href=this.props.songs.href.toString();
    console.log("href", href);
    var first = href.indexOf("offset=");
    console.log("first", first);
    var firstTrack=href.substr(first,8);
    console.log("firstTrack :", firstTrack);*/
   
    console.log(this.props.songs);
    return ( 
        <Segment> 
            <Header></Header>              
            {
                ((this.props.songs?.total != null) && (this.props.songs.total>0))? 
                    this.props.songs.items.map((track, index) => 
                        <Table key={track?.id} fixed celled selectable stackable size='large'>
                            <Table.Header>                           
                                <Table.Row>    
                                    <Table.HeaderCell />                    
                                    <Table.HeaderCell>Artist</Table.HeaderCell>
                                    <Table.HeaderCell>Album Title</Table.HeaderCell>                        
                                    <Table.HeaderCell>Album Type</Table.HeaderCell>
                                    <Table.HeaderCell>Track Number</Table.HeaderCell>
                                    <Table.HeaderCell>Track Name</Table.HeaderCell>
                                    <Table.HeaderCell>Listen on Spotify</Table.HeaderCell>
                                    <Table.HeaderCell>Spotify Track ID</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>               
        
                            <Table.Body>
                                <Table.Row key={index}>
                                    <Table.Cell>
                                        <Image
                                            src={track.album.images[1].url}
                                            size='small'
                                            />
                                    </Table.Cell>
                                    <Table.Cell content={track.album.artists[0].name}/>
                                    <Table.Cell content={track?.album?.name} />
                                    <Table.Cell content={track?.album?.album_type?.charAt(0).toUpperCase()+track?.album?.album_type.substring(1)} />
                                    <Table.Cell>{track?.track_number}</Table.Cell>
                                    <Table.Cell>{track?.name}</Table.Cell>
                                    <Table.Cell> 
                                        <Embed
                                            placeholder={SpotifyLogo}                                                              
                                            url={track?.preview_url}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button
                                            size='big'
                                            fluid
                                            content="Select dis?"
                                            index={track?.id}
                                            onClick={() => (this.setState({ track_id: track?.id }, this.handleClick))}
                                            value={track.id}
                                            color='yellow'
                                            id={track?.id}
                                            labelPosition='left'
                                            icon='thumbs up'
                                            />                                           
                                    </Table.Cell>
                                </Table.Row>   
                            </Table.Body>
                        </Table> )
                        :    
                        <Header key='1' as='h1'   
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