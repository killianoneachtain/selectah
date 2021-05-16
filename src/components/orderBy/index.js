import React, {   Component } from 'react'
import { Dropdown, Grid } from 'semantic-ui-react'
import { CollectionContext } from '../../contexts/collectionContext'

const options = [  
        { key: 1, text: 'Label', value: "label" },
        { key: 2, text: 'Artist', value: "artist" },
        { key: 3, text: 'Title', value: "title" },
        { key: 4, text: 'Catalog Number', value: "catno" },
        { key: 5, text: 'Format', value: "format" },
        { key: 6, text: 'Rating', value: "rating" } ,
        { key: 7, text: 'Date Added', value: "added" } ,
        { key: 8, text: 'Release Year', value: "year" } 
    ]
      

export default class OrderBy extends Component {
  state = { value : ""}

  static contextType  = CollectionContext

  componentDidMount() {
    const collectn = this.context     
    this.setState({value: collectn.orderBy})
  }
    handleChange = (e, { value }) => 
    {
      this.setState({ value }) 
      this.context.setOrderBy(value.value)
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
