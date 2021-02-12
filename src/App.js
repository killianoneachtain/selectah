import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      logins :[]
    }
  }

  componentDidMount() {
     fetch('/authorize')
     .then(res => res.json())
     .then(logins => this.setState({logins}, () => console.log('Data fetched ....', logins)))    

  }

render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Login
          </div>
          <div>      
            <a href={this.state.logins.authorizeUrl}>
            <button>
              Login
            </button>
            </a>
          </div>       
      </header>
    </div>
  );
}
}

export default App;
