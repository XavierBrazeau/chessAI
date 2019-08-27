/* 
const EventEmitter = require('events');

const emitter = new EventEmitter();

//Register a listener... on -> addEventListener
emitter.on('messageLogged', function(){
    console.log('ListenerCalled')
});

//raise an event for a listener to do something
emitter.emit('messageLogged'); */

const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');
const path = require('path');

app.use(express.static('public'));
app.use(express.static('librairies'));

// app.get('/', function(req, res){
//     res.sendFile(__dirname + 'board.html')
// })

// var options = {
//     board:  fs.readFileSync(__dirname + "board.js"),
//     piece:  fs.readFileSync(__dirname + "piece.js"),
//     sketch: fs.readFileSync(__dirname + "sketch.js") 
//   };

console.log(__dirname + "/board.html")
  
const server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/board.html', 'utf8');

    myReadStream.pipe(res);
    //myReadStream.pipe(req);
});

server.listen(8080, '127.0.0.1');

console.log('listening on port 8080...')

 