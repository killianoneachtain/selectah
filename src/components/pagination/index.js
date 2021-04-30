import React, { useContext, useState } from 'react'
import {  Pagination } from 'semantic-ui-react'
import { CollectionContext} from '../../contexts/collectionContext'

const PaginationCollection = ({pageData}) => {
    
    const collection = useContext(CollectionContext);
     
    const [activePage, setActivePage] = useState(collection.pageNumber);
    

  const handlePaginationChange = (e, { activePage }) =>  {
    console.log(`Change Page to :::: ${activePage}`)
    setActivePage(activePage);
    collection.setPageNumber(activePage)
  }   
      
    return (
          <Pagination
            activePage={activePage}
            onPageChange={handlePaginationChange}
            totalPages={String(pageData.pages)}                    
          />  
    )
  
}

export default PaginationCollection