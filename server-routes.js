var express = require('express');
var app = express();
var url = require('url');


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('Obtendo informações');
});

app.get('/create', function (req, res) {
  res.send('enviando informações');
});

app.get('/upadting', function(req, res){
  res.send('Editando informações');
});

app.get('/delete', function(req, res){
  res.send('Deletando informações');
});
app.listen(3000);