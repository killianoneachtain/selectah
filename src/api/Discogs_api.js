export const getGenres = () => {
  return fetch('/user/genres' )
    .then(res => res.json())    
    .then(json => json.genres);
};

export const getCollection = (pgNumber, userName) => {  
  return fetch(`/user/${userName}/collection/${pgNumber}`)  
    .then(res => res.json())
};

export const getPages = () => {
  return fetch(`/user/pages`)
    .then(res => res.json())
};

export const checkName =(name) => {
  return fetch(`/user/check/${name}`)
  .then(res => res.json())
}

export const changeMetaDataName = (userID, newName) => 
{
  console.log(`Fetching : /auth0/change_metadata/${userID}/${newName}`)
  return fetch(`/auth0/change_metadata/${userID}/${newName}`)
  .then(res=> res.json())
}

