export const getGenres = () => {
  return fetch(
    "/user/genres"
  )
    .then(res => res.json())
    .then(json => json.genres);
};

export const getCollection = (pgNumber) => {
  return fetch(`/user/collection/${pgNumber}`)  
    .then(res => res.json(), console.log("I AM GETTING A PAGE"))
};

export const getPages = () => {
  return fetch('/user/pages')
    .then(res => res.json())
};

/**
 *  makeHttpRequestWithPage = async pageNumber => {
    let response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    this.setState({
      users: data.data,
      total: data.total,
      per_page: data.per_page,
      current_page: data.page,
    });
  } */