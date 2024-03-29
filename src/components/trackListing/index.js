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
      trackListing: [], 
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

  handleClick = async (e,titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index   

    const releaseID = this.props.release.toString()
    console.log("releaseID: ", releaseID)
    
   
    
      trackPromise(
        Promise.all([
      await fetch(`https://tranquil-tundra-23022.herokuapp.com/user/release/${releaseID}`),
      await fetch(`https://tranquil-tundra-23022.herokuapp.com/user/trackAnalysis/${releaseID}`)
    ])
    .then(async([aa, bb]) => {
      const a = await aa.json()
      const b = await bb.json()
      this.setState({tracklisting: a, isLoading:false, trackAnalytics: b, getAnalysis: false})
      return [a,b]
    }) 
    .then((responseText) => {
      console.log(responseText);
  
    }).catch((err) => {
      console.log(err);
    })  )

    this.setState({ activeIndex: newIndex })

  }
  
  render() {
    const { activeIndex } = this.state
   
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