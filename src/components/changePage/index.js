import React, {useContext, useState} from 'react'
import {CollectionContext} from '../../contexts/collectionContext'
import { Grid, Input, Pagination, Segment } from 'semantic-ui-react'

const ChangePage = (pageData) => {
    const collection = useContext(CollectionContext);

    const [activePage] = useState("1");

    const handleInputChange = (e, { value }) => 
        this.setState({ activePage: value },
        console.log(`Here changing activePage : ${value}`),
        collection.setPageNumber({activePage: value}))    

    const handlePaginationChange = (e, { activePage }) => this.setState({ activePage },
        console.log(`Here changing ${activePage}`),
        collection.setPageNumber({activePage}))  
  
    const maxPages = pageData.pages;  
    
    return (
      <Grid columns={2} verticalAlign='middle'>
        <Grid.Column>
          <Segment secondary>
            <div>Current Page: {activePage}</div>
            <Input
              min={1}
              max={maxPages}
              onChange={handleInputChange}
              type='range'
              value={activePage}
            />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Pagination
            activePage={activePage}
            onPageChange={handlePaginationChange}
            totalPages={maxPages}
          />
        </Grid.Column>
      </Grid>
    )
  }


export default ChangePage;