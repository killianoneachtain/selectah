export const request_token = () => {

    var stamp = new Date().getTime();
    console.log('timestamp is : ',stamp);

var myHeaders = new Headers();
myHeaders.append("Authorization", `OAuth oauth_consumer_key="${process.env.DISCOGS_KEY}",oauth_signature_method="PLAINTEXT",oauth_timestamp="${stamp}",oauth_nonce="6d041e65-fbe4-45bd-8199-73f353cea590",oauth_version="1.0",oauth_signature="${process.env.DISCOGS_SECRET}", oauth_callback="https://selectah.vercel.app"`);
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("User-Agent", "PostmanDiscogs/1.0");

console.log("Headers",myHeaders.get);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

var reply = fetch("https://api.discogs.com/oauth/request_token", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('request_token_error', error));

  //oauth_token=QNrYVjgBRhFYnnpXUAPNztKzPJCkMfNEFvjjhJKK&oauth_token_secret=AYswGyHzbOkQqHlLITOCUcdJDjFJGvKugHgChZMP&oauth_callback_confirmed=true
  //https://discogs.com/oauth/authorize?oauth_token=QNrYVjgBRhFYnnpXUAPNztKzPJCkMfNEFvjjhJKK
  
  console.log(reply);

  // openUrl('https://discogs.com/oauth/authorize?oauth_token=QNrYVjgBRhFYnnpXUAPNztKzPJCkMfNEFvjjhJKK');

  return reply; 

};

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
 console.log(makeid(5));