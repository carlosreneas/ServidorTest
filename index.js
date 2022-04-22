const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

var users = [];
let usuarioini = {
 name:'User Test',
 password: '1234',
  user: 'test',
  email: 'usertest@gmail.com'
};

users.push(usuarioini);

let usuario = {
 name:'',
 password: '',
  user: '',
  email: ''
};

app.get('/', (req, res) => {
  res.send('Uyyyy Ahora en reunión de SIAWEB')
});

app.post('/login', (req, res) => {
  let e = {
       login: false,
       mensaje: 'Error in login'
      };
  if(users.length === 0) res.send(e);
  let login = {
    login: false,
       mensaje: 'Usuario o contraseña invalido'
  }
  userLogin = users.map( user =>{
    let respuesta = {
       login: false,
       mensaje: 'Error in login'
      };
    if(user.user === req.body.user && user.password === req.body.password){
      respuesta = {
       login: true,
       user: user.user,
       name: user.name, 
       mensaje: 'Welcome'
      };
      login = respuesta;
      return login;
    }
});
  res.send(login);
})

app.get('/users', (req, res) => {
  res.send(users);
})

app.post('/register', (req, res) => {
console.log(req);
  if(!req.body.user || !req.body.name || !req.body.email || !req.body.password) {
  respuesta = {
   error: true,
   codigo: 502,
   mensaje: 'All fields are required'
  };
 } else {

   usuario = {
    name: req.body.name,
    email: req.body.email,
     password: req.body.password,
     user: req.body.user
   };
    users.push(usuario);
   respuesta = {
    error: false,
    codigo: 200,
    mensaje: 'User register',
    respuesta: usuario
   };
  
 }
  res.send(respuesta);
});

app.listen(3000, () => {
  console.log('server started');
});
