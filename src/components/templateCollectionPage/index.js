import React, { useState } from "react";
import Header from "../headerCollection";
import CollectionList from "../collectionList";
import FilterControls from "../filterControls";

const CollectionPageTemplate = ({collection, title, action}) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  //const genre = genreFilter
  console.log("GenreFilter : ", genreFilter)
  let displayedCollection = collection
    .filter(c => {      //var res=[];
//search in both artist and artists in complitaiton and join 2 arrays and return that
      return c.basic_information.artists[0].name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    }) 
    .filter(c => {
      return c.basic_information.genres.join(",").search(genreFilter) !== -1;        
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <Header title={title} numCollection={displayedCollection.length} />
      <FilterControls onUserInput={handleChange} numCollection={displayedCollection.length}/>
      <CollectionList
        action={action}
        collection={displayedCollection}
      ></CollectionList>
    </>
  );
};

export default CollectionPageTemplate ;