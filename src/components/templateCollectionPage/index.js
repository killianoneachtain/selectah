import React, { useState } from "react"
import Header from "../headerCollection"
import CollectionList from "../collectionList"
import FilterControls from "../filterControls"

const CollectionPageTemplate = ({collection, title, pages, action}) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");  

  let displayedCollection = collection
    .filter(c => {      //var res=[];

      return c.basic_information.artists[0].name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    }) 
    .filter(c => {
      return c.basic_information.genres.join(",").includes(genreFilter)  !== -1;        
    });

  const handleChange = (type, value) => {
    if (type === 'name') setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <Header title={title} numCollection={displayedCollection.length} />
      <FilterControls onUserInput={handleChange} numCollection={displayedCollection.length}/>
      <CollectionList
        action={action}
        collection={displayedCollection}
        pages={pages}      />
    </>
  );
};

export default CollectionPageTemplate ;