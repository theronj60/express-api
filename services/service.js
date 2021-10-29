// bridge for routes and database

const db = require('./db')
// const helper = require('../helper')
// const config = require('../config')

async function getEmployee() {
	const employees = await db.query('SELECT * FROM `Employees`')
	return employees
}

async function getEmployeeById(id) {
	console.log(id)
	const employee = await db.query('SELECT * FROM `Employees` WHERE id = ' + id)
	return employee
	}

module.exports = {
	getEmployee,
	getEmployeeById
}
