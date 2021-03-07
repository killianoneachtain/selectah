import React, { Component } from 'react'
import {  Table, Segment, Accordion, Icon, Dimmer } from 'semantic-ui-react'
import TracklistTable from '../../components/tracklistTable'
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

const LoadingTracklistingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
          return (
              promiseInProgress && 
          <Segment>
            <Table.Body>      
              <Table.Row textAlign='center'>                      
                      <Table.Cell colSpan='1'>
                      <Dimmer active>
                              <Loader type="ThreeDots" color="#F5DF2E" height="150" width="150" />
                          </Dimmer>
                      </Table.Cell>                 
              </Table.Row>  
            </Table.Body> 
          </Segment>
         );  
        }

export default class ListingAccordion extends Component {
  state = { activeIndex: 0, tracklisting: [],  isLoading:true  }   

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    trackPromise(fetch(`/user/release/${this.props.release}`)
        .then(res => res.json())   
        .then(tracklisting => this.setState({tracklisting, isLoading:false}, () => console.log('Tracklisting fetched ....', tracklisting))))
                       
    
    this.setState({ activeIndex: newIndex })
  }

  render() {
   
    //console.log("trackListing state in return props :",this.state.tracklisting);
    const { activeIndex } = this.state

    return (
      <Accordion fluid styled>       
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Tracklisting 
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>       
            <LoadingTracklistingIndicator />
            <TracklistTable tracklisting = {[this.state.tracklisting]} artist={this.props.artist} />
          
        </Accordion.Content>
      </Accordion>
    )
  }
}