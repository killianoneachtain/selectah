export const request_token = () => {
  return(fetch('/authorize')
  .then(res => res.json())
  .then(logins => this.setState({logins}, () => console.log('Data fetched ....', logins))) 
  )   
}