import React, { useState } from "react";
import Header from "../headerCollection";
import CollectionList from "../collectionList";
import FilterControls from "../filterControls";

const CollectionPageTemplate = ({collection, title, action}) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genre = Number(genreFilter)
  let displayedCollection = collection
    .filter(c => {
      return c.basic_information.artists[0].name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(c => {
      return  genre > 0
        ? c.genre_ids.includes(Number(genreFilter))
        : true;
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