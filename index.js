var express = require('express')
var path = require('path')
var app = express()

var PORT = process.env.PORT || 5000
// var config = require('./config')

// static files.
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
	res.sendfile('index.html')
})


app.listen(PORT, function (err) {
	if(err) {
		console.log('Error al correr en el puerto '+PORT)
	}

	console.log('Corriendo en el puerto '+PORT)
})