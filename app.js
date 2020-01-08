var express = require('express');
var todoController = require('./controllers/todocontrollers.js')

var app = express();


app.set('view engine','ejs');


app.use(express.static('./public'));
todoController(app);

app.listen(process.env.PORT);

console.log('You are listening to the port 3000')

