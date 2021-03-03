import React, { useState, useEffect, createContext } from 'react'
import { getGenres } from '../api/Discogs_api'

export const GenresContext = createContext(null)

const GenresContextProvider = props => {
    const [genres, setGenres] = useState([{ id: "0", name: "All" }]);
    
    useEffect(() => {
      getGenres().then(allGenres => {
        setGenres([genres[0], ...allGenres]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <GenresContext.Provider
          value={{ genres }}  >
          {props.children}
        </GenresContext.Provider>    
    )
}
export default GenresContextProvider;