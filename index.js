var express = require('express')
var path = require('path')
var app = express()


var config = require('./config')

// static files.

app.use(express.static('public'));


app.get('/', function (req, res) {
	res.sendfile('./public/index.html')
})


app.listen(config.server.port, function () {
	if(err) {
		console.log('Error al correr en el puerto '+config.server.port)
		return
	}

	console.log('Corriendo en el puerto'+config.server.port)
})