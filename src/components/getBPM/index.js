import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
//import { trackPromise } from "react-promise-tracker";

class GetBPM extends Component {   
constructor(props) {
        super(props);
        this.state = {
            BPM: "",                                           
        }
    }  

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        console.log("Song:", this.props.song);
        console.log("Artist : ", this.props.artistName);
    
        fetch(`/song/${this.props.artistName}/${this.props.song}`)
            .then(res => res.json())   
            .then(BPM => this.setState({BPM, isLoading:false}, () => console.log('BPM fetched ....', BPM)))
                           
        
        this.setState({ activeIndex: newIndex })
      }


    render() {
        //console.log("Song:", this.props.song);
        //console.log("Artist : ", this.props.artistName);
        
        return (  
                  
                        <Button 
                        basic color='orange'
                        content='Get BPM'    
                        onClick={this.handleClick}                   
                        />                        
                    
        );
    }
    }
export default GetBPM;
