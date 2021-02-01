import React, {useState, useEffect } from "react";
//import Header from "../components/headerMovieList";
//import MovieList from "../components/movieList";
//import FilterControls from "../components/filterControls";
import Login from "../components/login";


const SongListPage = () => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetch(
      //``
      //https://api.spotify.com/v1/search?q=U2&type=track%2Cartist&market=US&limit=10&offset=5" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer fbafa9ca1ce642e9b19738978503314a
     `https://api.spotify.com/v1/search?q=U2&type=track%2Cartist&market=US&limit=10&offset=5" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer ${process.env.SPOTIFY_SECRET}`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json)
        return json.results
      })
      .then(songs => {
        setSongs(songs);
      });
  }, []);



  return (
    <>  
      <Login
        />  
    </>
  );
};

export default SongListPage;