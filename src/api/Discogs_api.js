export const getGenres = () => {
  return fetch(
    "/user/genres"
  )
    .then(res => res.json())
    .then(json => json.genres);
};

export const getCollection = (pgNumber, userName) => {  
  return fetch(`/user/${userName}/collection/${pgNumber}`)  
    .then(res => res.json())
};

export const getPages = () => {
  return fetch('/user/pages')
    .then(res => res.json())
};

