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
            isLoading:true
        }
    }   
    
    handleClick = (e) => {    

      console.log("Song sent to Spotify to Search:", this.props.song);
      console.log("Artist sent to Spotify to Search:", this.props.artistName);
  
      trackPromise(fetch(`/song/${this.props.artistName}/${this.props.song}`)
          .then(res => res.json())   
          .then(songs => this.setState({songs, isLoading:false}, () => console.log('Songs fetched ....', songs))))
             
    }
    
    handleChangeForms = (e, { value }) => {
      this.setState({ something: value });
    }
      
    handleCreateButton(evt) {
      console.log("I clicked Yes")
      evt.preventDefault()
      
      this.closeModal();
    }
  
    closeModal = () => {
      console.log("I clicked Nope")
      this.setState({ showModal: false })
    }
  
  
render(){      
    //console.log("SongSelection Song:", this.props.song);
    //console.log("SongSelection Artist : ", this.props.artistName);
   
    const{ showModal} = this.state

    var tracktotal = this.state.songs.total;
    console.log("tracktotal", tracktotal);
    
    //var href=this.state.songs;
    //console.log("href", href);
    //var first = href.indexOf("offset=");
    //var firstTrack=href.substring(first,10);
    //console.log("firstTrack :", firstTrack);      

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
          <Modal.Header>Select the Spotify track to BPM </Modal.Header>
          <Modal.Content image scrolling>
            <Image size='small' src={SpotifyLogo} wrapped />
            <Modal.Description>
            
              <Header as='h2' color='blue' align='center'>              
                Artist : {this.props.artistName}<br></br>
                Title : {this.props.song}<br></br>                
              </Header> 

              <ChooseTrack songs={this.state.songs}/>

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
}

export default SongSelection;