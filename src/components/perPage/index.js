import React, { Component } from 'react'
import { Dropdown, Grid } from 'semantic-ui-react'
import { CollectionContext } from '../../contexts/collectionContext'

const options = [  
  { key: 1, text: '50', value: "50" },
  { key: 2, text: '75', value: "75" },
  { key: 3, text: '100', value: "100" },
  { key: 4, text: '250', value: "250" },
  { key: 5, text: '500', value: "500" } 
]

//bring in context and set the values / get values currently...

export default class PerPage extends Component {
  state = { value: ""}

  static contextType  = CollectionContext

  componentDidMount() {
    const collectn = this.context     
    this.setState({value: collectn.perPage})
  }

  handleChange = (e, { value }) => 
  {
    this.setState({ value }) 
    this.context.setPerPage(value)
  }

  render() {
    const { value } = this.state

    return (
      <Grid>
        <Grid.Column>
          <Dropdown
            onChange={this.handleChange}
            options={options}
            placeholder={value}
            selection
            value={value}
          />
        </Grid.Column>       
      </Grid>
    )
  }
}
