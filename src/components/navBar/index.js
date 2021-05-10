import React, { Component } from 'react'
import {  Image, Grid, Menu,  Header, Icon  } from 'semantic-ui-react'
import Logout from '../Logout'
import discogsLogo from "../../../src/images/discogs_logo.png"
//import FilterControls from '../filterControls'
import ChangeDiscogsUserName from '../changeDiscogsUserName'
  
  class NavBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: false,
        activeItem: "home"
      };
    }
    
    toggleVisibility = () => this.setState({ visible: !this.state.visible });
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    
    
    
    render() {      
      return (      
          <Menu >
            <Menu.Item>
              <Header as='h3'>
                  <Icon name='user' color={ this.props.userName ? 'green' : 'red'}/> {this.props.userName} </Header>
            </Menu.Item>

            <Menu.Item>
                <Image src={discogsLogo} size='tiny'/>
            </Menu.Item>

            <Menu.Item>
                <Grid columns={2} divided>
                    <Grid.Column>
                        <Header as='h3' content={`Current Discogs Collection :  ${this.props.discogs_username}`}/>
                    </Grid.Column>
                    <Grid.Column>
                        <ChangeDiscogsUserName current={this.props.discogs_username} />
                    </Grid.Column>                  
                </Grid>
            </Menu.Item>    
                       
            <Menu.Menu position="right"> 
            
              <Logout />              
            </Menu.Menu>            
          </Menu>                    
          
      );
    }
  } 

  export default NavBar;
  