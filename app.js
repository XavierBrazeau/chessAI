
const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');
const path = require('path');

app.use(express.static('libraries'));
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/board.html')
    console.log('yeetyeet')

});

app.listen(8080, function(){
    console.log('listening on port 8080...')
});


 