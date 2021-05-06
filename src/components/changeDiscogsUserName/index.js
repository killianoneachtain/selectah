import React, {Component} from 'react'
import { Button, Image, Header, Modal, Form, Grid, Icon, Dimmer, Input } from 'semantic-ui-react'
import discogsLogo from "../../../src/images/discogs_logo.png"
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
  
      trackPromise(fetch(`/user/${this.props.userId}/${this.props.discogs_username}`)
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
      size='small'
      trigger={
        <Button           
          onClick={() => (this.setState({ showModal: true }, this.handleClick))}
            icon='edit'
            content='Change Discogs Username'
            color='yellow'
            size='large'
           />}
      >
        <LoadingSongSelectionIndicator />
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
              <Form onSubmit={this.handleSubmit}>      
                <Input 
                  style={{paddingTop:'5px'}} 
                  fluid 
                  icon='users'
                  value={this.state.checkName} 
                  size='large' 
                  iconPosition='huge' 
                  placeholder='Search users...' /> 
                  </Form>            
              </Grid.Column>

            </Grid>
          </Modal.Content>
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
        </Modal>
      )}   
      else 
      {
        return null;

      }}
        
              
}

export default ChangeDiscogsUserName;