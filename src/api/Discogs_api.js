export const getGenres = () => {
  return fetch('https://tranquil-tundra-23022.herokuapp.com/user/genres' )
    .then(res => res.json())    
    .then(json => json.genres);
};

export const getCollection = (pgNumber, userName, orderBy, perPage) => {  
  return fetch(`https://tranquil-tundra-23022.herokuapp.com/user/${userName}/collection/${orderBy}/${perPage}/${pgNumber}`)  
    .then(res => res.json())
};

export const getPages = async (userName,perPage,orderBy) => {
  //console.log("getPages for :", userName);
  return await fetch(`https://tranquil-tundra-23022.herokuapp.com/user/pagination/${userName}/${perPage}/${orderBy}`)
    .then(      
      res => res.json())
};

export const checkName =(name) => {
  return fetch(`https://tranquil-tundra-23022.herokuapp.com/user/check/${name}`)
  .then(res => res.json())
}

export const changeMetaDataName = (userID, newName) => 
{
  //console.log(`Fetching : /auth0/change_metadata/${userID}/${newName}`)
  return fetch(`https://tranquil-tundra-23022.herokuapp.com/auth0/change_metadata/${userID}/${newName}`)
  .then(res=> res.json())
}