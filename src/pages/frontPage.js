import React from 'react';
import discogsLogo from "../../src/images/discogs_logo.png";
import '../components/frontPage/frontPage.css';

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
                         
        <div className="welcome-wrapper">  
        <div>
            <h1>Selectah</h1>  
            <h2>BPM your music collection.</h2>
        </div>     
        <div>
            <a href={this.state.logins.authorizeUrl}>
            <button className="button">Login</button>   
            </a>       
    
            <a href='https://accounts.discogs.com/register'>
                <button className="button" type="submit">Register</button>
                
            </a>
        </div>      
    
        <div>
        <img className='logo' src={discogsLogo} alt="Logo"/>
        </div>    
      </div>  
        
        );
        }
}

export default Front;