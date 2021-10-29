const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const app = express()
const employees = require('./routes/employees')

dotenv.config()

app.use(express.static('public'));

app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
)
app.get('/', (req, res) => {
	res.json({'message': 'ok'})
})

app.use('/employees', employees)
app.use('/employees/:id', employees)

app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500
	console.error(err.message, err.stack)
	res.status(statusCode).json({'message': err.message})
	return
})

const port = process.env.PORT

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)

	console.log(process.env.DB_NAME)
})
