module.exports = {

	server: {
		host: 'localhost',
		port: 5000 || process.env.PORT
	},
	database: {
		host: 'localhost',
		post: 27017,
		db: 'x',
		url: 'mongodb://127.0.0.1:27017/x'
	},
	key: {
		privateKey: 'mysupersecretkey',
		tokenExpiry: '30d'
	}
}