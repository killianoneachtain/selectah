import React, {Component} from 'react'
import { Table, Image, Embed } from 'semantic-ui-react'
import SpotifyLogo from '../../images/Spotify_Icon_RGB_Green.png'

class ChooseTrack extends Component{
    constructor(props) {
        super(props);       
        this.state = {            
            songs : [this.props.songs]
        }
    } 
  
render(){ 
   
    return (                   
              <Table fixed celled selectable stackable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='8'>Total : {this.props.songs?.total} </Table.HeaderCell>
                    </Table.Row>
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
                {
                    ((this.props.songs?.total != null) && (this.props.songs.total>0))? 
                        this.props.songs.items.map((track, index) => 
                   
                        <Table.Row key={index}>
                            <Table.Cell>
                                <Image
                                    src={track.album.images[1].url}
                                    size='small'
                                    />
                            </Table.Cell>
                            <Table.Cell>{track.album.artists[0].name}</Table.Cell>
                            <Table.Cell>{track.album.name}</Table.Cell>
                            <Table.Cell>{track?.album?.album_type?.charAt(0).toUpperCase()}{track?.album?.album_type.substring(1)}</Table.Cell>
                            <Table.Cell>{track?.track_number}</Table.Cell>
                            <Table.Cell>{track?.name}</Table.Cell>
                            <Table.Cell> 
                                <Embed
                                    autoplay={false}
                                    color='white' 
                                    placeholder={SpotifyLogo}                                                              
                                    url={track?.preview_url}
                                />
                            </Table.Cell>
                            <Table.Cell>{track?.id}</Table.Cell>
                            
                           
                        </Table.Row> )
                        : 
                        <Table.Row>No</Table.Row>
                }                    
                  
                </Table.Body>
            </Table>      
      
      )}
}

export default ChooseTrack;