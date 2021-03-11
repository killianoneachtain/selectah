import React, {Component} from 'react'
import { Button, Image, Header, Modal } from 'semantic-ui-react'
import ChooseTrack from '../chooseSong'
import SpotifyLogo from '../../images/Spotify_Icon_RGB_Green.png'

class SongSelection extends Component{
    constructor(props) {
        super(props);       
        this.state = {            
            songs : [] ,   
            showModal: false
        }
    }   
    
    handleClick = (e) => {    

      console.log("Song sent to Spotify to Search:", this.props.song);
      console.log("Artist sent to Spotify to Search:", this.props.artistName);
  
      fetch(`/song/${this.props.artistName}/${this.props.song}`)
          .then(res => res.json())   
          .then(songs => this.setState({songs, isLoading:false}, () => console.log('Songs fetched ....', songs)))
             
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

    return (
      <Modal 
      closeIcon 
      onClose={this.closeModal} 
      open={showModal} 
      size='fullscreen'
      trigger={
        <Button 
          positive
          onClick={() => (this.setState({ showModal: true }, this.handleClick))}
            icon='plus'
            content='Get BPM'
           />}
      >
          <Modal.Header>Choose the correct Spotify Track</Modal.Header>
          <Modal.Content image scrolling>
            <Image size='small' src={SpotifyLogo} wrapped />
            <Modal.Description>
            
              <Header as='h2' color='blue'>              
                Artist : {this.props.artistName}<br></br>
                Title : {this.props.song}
              </Header> 

              <ChooseTrack songs={this.state.songs}/>



              <Header as='h4'>Is it okay to use this song to Query the Spotify Database?</Header>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
          <Button negative onClick={(evt) => this.handleCreateButton(evt)}>Nope</Button>
            <Button
              content="Yes"
              labelPosition='right'
              icon='checkmark'
              onClick={(evt) => this.handleCreateButton(evt)}
              positive
            />
          </Modal.Actions>
        </Modal>
      )}
}

export default SongSelection;