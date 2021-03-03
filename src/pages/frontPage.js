import React from 'react'
import discogsLogo from "../../src/images/discogs_logo.png"
import '../components/frontPage/frontPage.css'
import {  Button, Segment, Header } from 'semantic-ui-react'

class Front extends React.Component {
        constructor() {
        super();
        this.state = {
        logins :[]
        }
        }

        componentDidMount() {
        fetch('/authorize')
        .then(res => res.json())
        .then(logins => this.setState({logins}, () => console.log('Data fetched ....', logins.authorizeUrl)))   

        }

        render(){
        return (
                         
            <Segment>
            <Header as='h1'>Selectah</Header>        
            <Header as='h2'>BPM your music collection.</Header>
               
            <Segment>            
                <Button >Login</Button>   
                    <Button 
                    size='big' 
                    src={discogsLogo} 
                    as='a'
                    href='https://accounts.discogs.com/register'
                    alt="dLogo"
                    floated='right'
                    verticalAlign='middle'                            
                    />
            </Segment>            
         </Segment>
        
        );
        }
}

export default Front;