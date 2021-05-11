import React, {Component} from 'react'
import { Button, Image, Header, Modal,Dimmer } from 'semantic-ui-react'
import ChooseTrack from '../chooseSong'
import SpotifyLogo from '../../images/Spotify_Icon_RGB_Green.png'
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

const LoadingSongSelectionIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
          return (
              promiseInProgress && 
                <Dimmer active>
                    <Loader type="ThreeDots" color="#F5DF2E" height="150" width="150" />
                </Dimmer>
         );  
        }

class SongSelection extends Component{
    constructor(props) {
        super(props);       
        this.state = {            
            songs : [] ,   
            showModal: false,
            isLoading:true,
        }
    }   
    
    handleClick = (e) => {    

      //console.log("Song sent to Spotify to Search:", this.props.song);
      //getTracks/:releaseID/:song_artist/:album_title/:song_title
      console.log(`/song/${this.props.artistName}/${this.props.releaseTitle}/${this.props.song}`)
      //console.log("Artist sent to Spotify to Search:", this.props.artistName);

      trackPromise(fetch(`/song/${this.props.artistName}/${this.props.releaseTitle}/${this.props.song}`)
          .then(res => res.json())   
          .then(songs => this.setState({songs, isLoading:false})))             
    }
    
    handleChangeForms = (e, { value }) => {
      this.setState({ something: value });
    }
      
    handleCreateButton(evt) {     
      evt.preventDefault()      
      this.closeModal();
    }
  
    closeModal = () => {      
      this.setState({ showModal: false })
    }
  
  
render(){     
    const{ showModal } = this.state     
       
if(this.props.trackNumber !== "")
{
    return (      
      <Modal 
      closeIcon 
      onClose={this.closeModal} 
      open={showModal} 
      centered
      style={{paddingLeft: '50px'}}
      size='fullscreen'
      trigger={
        <Button 
          positive
          onClick={() => (this.setState({ showModal: true }, this.handleClick))}
            icon='plus'
            content='Get BPM'
           />}
      >
        <LoadingSongSelectionIndicator />
          <Modal.Header>Select the Spotify track to BPM  <Header as='h2' color='blue' align='center'>              
                Artist : {this.props.artistName}<br></br>
                Title : {this.props.song}<br></br>                
              </Header>  </Modal.Header>
          <Modal.Content image scrolling>
            <Image size='small' src={SpotifyLogo} wrapped />
            <Modal.Description>  
              <ChooseTrack songs={this.state.songs} artistName={this.props.artistName} song={this.props.song}/>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
          <Button 
            negative 
            onClick={(evt) => this.handleCreateButton(evt)}
            content='Rewind'
            labelPosition='left'
            icon='x'
            />           
          </Modal.Actions>
        </Modal>
      )}   
      else 
      {
        return null;
      }}       
              
}

export default SongSelection;