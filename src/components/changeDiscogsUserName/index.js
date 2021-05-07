import React, {Component} from 'react'
import { Button, Image, Header, Modal, Grid } from 'semantic-ui-react'
import discogsLogo from "../../../src/images/discogs_logo.png"

import CheckName from '../checkDiscogsName'

class ChangeDiscogsUserName extends Component{
    constructor(props) {
        super(props);       
        this.state = {  
            showModal: false,
            isLoading:true,
            checkName: ""
        }
    }   
    
    handleClick = (e) => {    

      //console.log("Song sent to Spotify to Search:", this.props.song);
      //console.log("Artist sent to Spotify to Search:", this.props.artistName);
  
      //trackPromise(fetch(`/user/${this.props.userId}/${this.props.discogs_username}`)
      //    .then(res => res.json())   
      //    .then(songs => this.setState({songs, isLoading:false})))
             
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
      size='small'
      trigger={
        <Button           
          onClick={() => (this.setState({ showModal: true }))}
            icon='edit'
            content='Change Discogs User'
            color='yellow'
            size='large'
           />}
      >
        
          <Modal.Header>
            <Header as='h2' color='grey' align='center'>              
                Current Discogs Username  : {this.props.current}                            
            </Header>  
          </Modal.Header>
          <Modal.Content>
            <Grid columns={3}>
              <Grid.Column>
                <Image size='big' src={discogsLogo} wrapped />
              </Grid.Column>
              <Grid.Column width={10}>  
                  <CheckName />
             </Grid.Column>

            </Grid>
          </Modal.Content>
          
        </Modal>
      )}   
      else 
      {
        return null;

      }}      
              
}

export default ChangeDiscogsUserName;

/*
<Modal.Actions>
          <Button 
            positive 
            onClick={(e) => this.handleClick(e)}
            content='Check Username'           
            icon={ <Icon.Group size='big'>
            <Icon name='check' />
            <Icon corner='bottom left' color='red' name='question' />
          </Icon.Group>}
            />           
          </Modal.Actions>
*/