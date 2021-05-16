import React, { useContext, useState } from 'react'
import { CollectionContext} from '../../contexts/collectionContext'
import { Pagination } from 'semantic-ui-react'

const PaginationCollection = ({pageData, use}) => {
    
  const collection = useContext(CollectionContext);
     
  const [activePage, setActivePage] = useState(collection.pageNumber);    

  const handlePaginationChange = (e, { activePage }) =>  {
    //console.log(`Change Page to :::: ${activePage}`)
    setActivePage(activePage);    
    collection.setPageNumber(activePage)
  }   
     
    return (
      use='top' ? 
          <Pagination
            activePage={activePage}
            onPageChange={handlePaginationChange}
            totalPages={String(pageData.pages)}  
            pointing
            secondary                  
          />  : 
          <Pagination
          activePage={activePage}
          onPageChange={handlePaginationChange}
          totalPages={String(pageData.pages)}  
          pointing
          secondary  

        />
          
    )
  
}

export default PaginationCollection