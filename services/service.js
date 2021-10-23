// bridge for routes and database

const db = require('./db')
// const helper = require('../helper')
// const config = require('../config')

async function getEmployee() {
	const employees = await db.query('SELECT * FROM `Employees`')
	return employees
}

module.exports = {
	getEmployee
}
