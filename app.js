
//require('nan')
const express = require('express');
const app = express();

app.use(express.static('libraries'));
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/board.html')
});

app.listen(8080, function(){
    console.log('listening on port 8080...')
});


 