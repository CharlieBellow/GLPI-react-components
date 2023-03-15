export default function fetchApiData () {
  // url e tipo de resquisição
  // get: pega datos
  fetch( "http://172.27.12.171:3333/sessions", 
  {method: "POST", 
  body: JSON.stringify({"email": "ud@arapiraca.ufal.br", "password": "admin"})
} )
    .then( ( response ) => {
      console.log("response", response);
      
    //response.json()
  })
  .then((data) => {
    console.log("data", data)


  });
}
