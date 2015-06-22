var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var EventEmitter = require('events').EventEmitter;

var tasks = [];


app.use(express.static('public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/web-components',  express.static(__dirname + '/web-components'));
app.use('/js',  express.static(__dirname + '/js'));


app.get('/', function(req, res){
  res.sendfile(__dirname  + '/index.html');
});


app.post('/new', function (req, res) {

  console.log(req.query);
  var desc = req.query.description,
  newID = Math.floor((Math.random()*10000)).toString(),
  newTask = {"description":desc,"status":"1","id":newID};
  tasks.push(newTask);
  res.send(tasks);


});

app.post('/delete', function (req, res) {



  res.send('POST request to the homepage');

});

server.listen(3000);
