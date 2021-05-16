import React, {Component} from 'react'
import { Button, Image, Header, Modal,Dimmer } from 'semantic-ui-react'
import ChooseTrack from '../chooseTrack'
import SpotifyLogo from '../../images/Spotify_Icon_RGB_Green.png'
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';
import { CollectionContext } from '../../contexts/collectionContext'

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
            isLoading: true,
            userID: "",
            track_id: ""            
        }
    }

    modalHandler() {
      this.setState({ showModal: false })
    }
    
    static contextType  = CollectionContext

    componentDidMount() {
      const collectn = this.context     
      this.setState({userID: collectn.userID})
    }
    
    handleClick = (e) => { 
      trackPromise(fetch(`/songSearch/${this.state.userID}/${this.props.releaseID}/${this.props.artistName.replace("/","%2F")}/${this.props.releaseTitle.replace("/","%2F")}/${this.props.song.replace("/","%2F").replace("'","‘")}`) 
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
  
    closeModal = async () => {      
      await fetch(`/songSearch/${this.state.userID}/deleteTracks`)
      .then(res => res.json())
      this.setState({ showModal: false })
    }
    
  render(){     
    const{ showModal } = this.state     
       
  if(this.props.trackNumber !== "")
  {
    return (      
      <Modal 
       
      onClose={this.closeModal} 
      open={showModal} 
      closeOnDimmerClick={false}
      centered
      style={{paddingLeft: '50px'}}
      size='fullscreen'
      trigger={
        <Button 
          color={this.props.color}
          onClick={() => (this.setState({ showModal: true },this.handleClick))}
            icon={this.props.icon}
            content={this.props.content}
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

              <ChooseTrack                 
                songs={this.state.songs} 
                artistName={this.props.artistName} 
                song={this.props.song} 
                analysisID={this.props.analysisID}
                releaseID={this.props.releaseID} 
                updateAnalytics={this.props.updateAnalytics} 
                closeModal={this.closeModal}
                />

            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
          <Button 
            negative 
            onClick={(evt) => this.handleCreateButton(evt)}
            content='Rewind'
            labelPosition='left'
            icon='x'
            size='big'
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