export const getGenres = () => {
  return fetch(
    "/user/genres"
  )
    .then(res => res.json())
    .then(json => json.genres);
};

export const getCollection = () => {
  return fetch('/user/collection')
    .then(res => res.json())
};

export const getPages = () => {
  return fetch('/user/pages')
    .then(res => res.json())
};