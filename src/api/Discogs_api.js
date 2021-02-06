export const request_token = () => {

      const stamp = new Date().getTime().toString().substring(0,10);     
      console.log('Current timestamp',stamp);    

      const randoms=`${makeid(8)}-${makeid(4)}-${makeid(4)}-${makeid(12)}`;  
      console.log('Random is : ',randoms);
      //const isOk = response => response.ok ? response.json() : Promise.reject(new Error('Failed to load data from server'))

      const myHeaders = new Headers();
          myHeaders.append("Authorization", `OAuth oauth_consumer_key="rSlgSvPFNYXtkYClvjLs",oauth_signature_method="PLAINTEXT",oauth_timestamp="${stamp}",oauth_nonce="${randoms}",oauth_version="1.0",oauth_signature="QRabRHFedozJinKOvopMUCKeCepaCJLn&", oauth_callback="https://selectah.vercel.app"`);
          myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
          myHeaders.append("User-Agent", "KilliansDiscogs/1.0");

      const request_token = new Request('https://api.discogs.com/oauth/request_token', {
             
              headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `OAuth oauth_consumer_key="rSlgSvPFNYXtkYClvjLs",oauth_signature_method="PLAINTEXT",oauth_timestamp="${stamp}",oauth_nonce="${randoms}",oauth_version="1.0",oauth_signature="QRabRHFedozJinKOvopMUCKeCepaCJLn&", oauth_callback="https://selectah.vercel.app"`
              })
            });
    

          //var requestOptions = {                  
          //  headers: myHeaders            
         // };

          var response = fetch(request_token)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('Fetch Request Token Killians : Error', error));

            console.log(response);
                    return response;
                };



export const request_token2 =() => {
      var axios = require('axios');

      const stamp = new Date().getTime().toString().substring(0,10);     
      console.log('Current timestamp',stamp);    

      const randoms=`${makeid(8)}-${makeid(4)}-${makeid(4)}-${makeid(12)}`;  
      console.log('Random is : ',randoms);

      var config = {
        method: 'get',
        url: 'https://api.discogs.com/oauth/request_token',
        headers: { 
          'Authorization': `OAuth oauth_consumer_key="rSlgSvPFNYXtkYClvjLs",oauth_signature_method="PLAINTEXT",oauth_timestamp="${stamp}",oauth_nonce="${randoms}",oauth_version="1.0",oauth_signature="QRabRHFedozJinKOvopMUCKeCepaCJLn&", oauth_callback="https://selectah.vercel/app"`, 
          'Content-Type': 'application/x-www-form-urlencoded', 
          'User-Agent': 'PostmanDiscogs/1.0'
        }
      };

     var response = axios(config)
      .then(function (response) {
        console.log((response.data));
      })
      .catch(function (error) {
        console.log("Axios Error :", error);
      });
      return response;
};

    

      function makeid(length) {
          var result           = '';
          var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;
          for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
      }


      /*
      
      Origin: http://localhost:3000
      Access-Control-Request-Method: GET
      Content-Length: 0
      Access-Control-Request-Headers: authorization,user-agent
      Referer: http://localhost:3000/
      Accept-Language: en-gb
   

      ---------------------------------------

      Authorization: OAuth oauth_consumer_key="rSlgSvPFNYXtkYClvjLs",oauth_signature_method="PLAINTEXT",oauth_timestamp="1612649353",oauth_nonce="6c0257c4-3df7-48c6-81be-65c5a0ba6521",oauth_version="1.0",oauth_signature="QRabRHFedozJinKOvopMUCKeCepaCJLn&", oauth_callback="your_callback"
      Content-Type: application/x-www-form-urlencoded
      Cache-Control: no-cache
      Postman-Token: d3d1d042-9a0c-4340-a087-b94ddddb55cb     

      */