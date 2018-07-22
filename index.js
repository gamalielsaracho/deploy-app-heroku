var express = require('express')
var path = require('path')
var app = express()

var PORT = process.env.PORT || 5000
// var config = require('./config')

// static files.

app.use(express.static('public'));


app.get('/', function (req, res) {
	res.sendfile('./public/index.html')
})


app.listen(PORT, function () {
	
	console.log('Corriendo en el puerto'+PORT)
})