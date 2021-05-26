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

  constructor(props) {
    super(props)
    this.state = { 
      activeIndex: 0, 
      tracklisting: [], 
      trackAnalytics: [],  
      isLoading:true, 
      getAnalysis:true
   } 
    this.updateAnalytics = this.updateAnalytics.bind(this)
  }

  updateAnalytics = (NewAnalysis) => {
   // console.log("New Analysis is : ", NewAnalysis)    
    this.setState({ trackAnalytics: NewAnalysis})
  }

 

  handleClick = (e,titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index   
    
   
    trackPromise(fetch(`/user/release/${this.props.release}`)      
        .then(response => response.json())           
        .then(tracklisting => this.setState({tracklisting, isLoading:false}))) 
        .then(trackPromise(fetch(`/user/trackAnalysis/${this.props.release}`)
        .then(res => res.json())        
        .then(trackAnalytics => this.setState({trackAnalytics, getAnalysis:false}))))
  
    
      this.setState({ activeIndex: newIndex })

  }
  
  render() {
    const { activeIndex } = this.state
           
    //console.log("trackAnalytics in trackListing : ", this.state.trackAnalytics)
    //console.log("tracklisting in trackListing : ", this.state.tracklisting)
    
    return (
      <Accordion>       
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick} >
          <Icon name='dropdown'/>
          Track-Listing
          
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>       
            <LoadingTracklistingIndicator />
            <TracklistTable 
              releaseID={this.props.release} 
              tracklisting = {[this.state.tracklisting]} 
              trackAnalytics = {[this.state.trackAnalytics]} 
              artist={this.props.artist} 
              userID={this.props.user_id}
              updateAnalytics={this.updateAnalytics}
              />
        </Accordion.Content>
      </Accordion>
    )
  }
}

/*
 componentDidMount(){
    trackPromise(Promise.all([
    fetch(`/user/release/${this.props.release}`),
    fetch(`/user/trackAnalysis/${this.props.release}`)
  ])
  .then(res => console.log(res))
  .then(res => Promise.all(res.map(r => r.json())))
  .then(data => this.setState({
    tracklisting: data[0],
    trackAnalytics: data[1]
  })))}
  /*.then(function (responses) {
    // Get a JSON object from each of the responses
    return Promise.all(responses.map(function (response) {
      return response.json();
    }));
  }).then(function (data) {
    // Log the data to the console
    // You would do something with both sets of data here
    console.log(data)  
    //this.setState({tracklisting : data[0], isLoading:false})      
    

  }).catch(function (error) {
    // if there's an error, log it
    console.log(error);
  })))}*/
     
