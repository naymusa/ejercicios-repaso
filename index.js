 //1.	Agrega un endpoint '/api/' que responda a una petición de tipo GET con un código de estado 200 y el siguiente json: 
//{ 'mensaje':'hola mundo' }

//-----------------
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/api/', (req, res) => {
//   res.send({ 'mensaje':'hola mundo' })
// })
//----------------------EJERCICIO 2 -------------

// 2.	Agrega un endpoint '/api/suma' que responda a una petición de tipo GET con la suma de dos números que reciba mediante las querys num1 y num2. El servidor debe responder con un código de estado 200 y un json como el siguiente:
// { 'resultado': 7 }

//----------------------
// const express = require('express')
// const app = express()
// app.use(express.json());
// const port = 3000

//-----parseInt > lo convierte en número busca parseInt js
// app.get('/api/suma/:num1/:num2', (req, res) => {
//   var numero1 = parseInt(req.params.num1);
//   var numero2 = parseInt(req.params.num2);
//   var resultado = numero1 + numero2;

//   res.status(200).send({ resultado : resultado })
// })


// 3.	Agrega un endpoint '/api/usuario/' que responda a una petición de tipo GET con el nombre que sea recibido a través de params. El servidor debe responder con un código de estado 200 y un json como este: { 'usuario': 'Edwin' }

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/api/usuario/:user', (req, res) => {
//   res.status(200).send({ 'usuario': req.params.user })
  
// })


// 4.	Agrega un endpoint '/api/swapi' que responda a una petición de tipo GET con el personaje solicitado de https://swapi.dev/. El cliente debe mandar el número de personaje mediante params. La respuesta del servidor debe lucir algo así
//             { 'personaje': {
//             	'name': 'Luke Skywalker',
//                         ...,
// } }

const express = require('express')
const fetch = require('node-fetch');
const app = express()
app.use(express.json())
const port = 3000

app.get('/api/swapi/:personaje', (req, res) => {
  //entradas
  const personaje = req.params.personaje;
  const api = "https://swapi.dev/api/people/" + personaje;
  console.log(api)

  //proceso
  fetch(api)
  .then( response => response.json() )
  //salidas
  .then(personaje1 => { console.log(personaje1);
    res.send(personaje1) });
})
//-----ejercicio juan camilo
// app.get("/api/swapi/:personaje", (req, res) => {
//   var idPersonaje = req.params.personaje;
//   const url = "https://swapi.dev/api/people/";

//   fetch(url + idPersonaje)
//     .then((response) => response.json())
//     .then((data) => {
//       if (data !== undefined) {
//         res.status(200).send(data);
//       } else {
//         res.status(404).send({
//           mensaje: "No se encontro personaje",
//         });
//       }
//     });
// });
///--------------->>>>>>>>>>>>>>>>>>>>>>>>>>
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})