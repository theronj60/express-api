// configs for db credentials
const dotenv = require('dotenv')
const env = process.env

dotenv.config()

const config = { 
	db: {
		host: env.DB_HOST,
		user: env.DB_USER,
		password: env.DB_PASSWORD,
		database: env.DB_NAME
	},
}

module.exports = config
