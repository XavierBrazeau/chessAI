
//require('nan')
const express = require('express');
const app = express();
var port = process.env.PORT || 3000;

app.use(express.static('libraries'));
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/board.html')
});

app.listen(port, function(){
    console.log('listening on port 8080...')
});


 