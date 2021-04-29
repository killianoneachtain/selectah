import React, { Component } from 'react'
import { Grid, Input, Pagination, Segment } from 'semantic-ui-react'

export default class PaginationCollection extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            activePage: 1,
            URL: [this.props.pageData.urls]
        }
    }   

  handleInputChange = (e, { value }) => 
    this.setState({ activePage: value },
    console.log(`Here changing activePage : ${value}`))    

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage },
    console.log(`Here changing ${activePage}`))  

  render() {
    const { activePage } = this.state
    const maxPages = this.props.pageData.pages;   

    
    return (
      <Grid columns={2} verticalAlign='middle'>
        <Grid.Column>
          <Segment secondary>
            <div>Current Page: {activePage}</div>
            <Input
              min={1}
              max={maxPages}
              onChange={this.handleInputChange}
              type='range'
              value={activePage}
            />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Pagination
            activePage={activePage}
            onPageChange={this.handlePaginationChange}
            totalPages={maxPages}
          />
        </Grid.Column>
      </Grid>
    )
  }
}