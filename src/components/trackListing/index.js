import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import TracklistTable from '../../components/tracklistTable'

export default class ListingAccordion extends Component {
  state = { activeIndex: 0 }    

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    fetch(`/user/release/${this.props.release}`)
        .then(res => res.json())   
        .then(tracklisting => this.setState({tracklisting}, () => console.log('Tracklisting fetched ....', tracklisting)))                 
    
    this.setState({ activeIndex: newIndex })
  }

  render() {
   
    console.log(this.props);
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
          <p>
            <TracklistTable release = {this.props.release}/>
          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}