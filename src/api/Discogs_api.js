export const getGenres = () => {
  return fetch('/user/genres' )
    .then(res => res.json())    
    .then(json => json.genres);
};

export const getCollection = (pgNumber, userName, orderBy, perPage) => {  
  return fetch(`/user/${userName}/collection/${orderBy}/${perPage}/${pgNumber}`)  
    .then(res => res.json())
};

export const getPages = async (userName,perPage,orderBy) => {
  //console.log("getPages for :", userName);
  return await fetch(`/user/pagination/${userName}/${perPage}/${orderBy}`)
    .then(      
      res => res.json())
};

export const checkName =(name) => {
  return fetch(`/user/check/${name}`)
  .then(res => res.json())
}

export const changeMetaDataName = (userID, newName) => 
{
  //console.log(`Fetching : /auth0/change_metadata/${userID}/${newName}`)
  return fetch(`/auth0/change_metadata/${userID}/${newName}`)
  .then(res=> res.json())
}