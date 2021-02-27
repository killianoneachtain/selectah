export const getGenres = () => {
  return fetch(
    "/users/genres"
  )
    .then(res => res.json())
    .then(json => json.genres);
};