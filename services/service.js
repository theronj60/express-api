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

async function createEmployee(newEmployee) {
	const result = await db.query(
		`INSERT INTO Employees (user_name, first_name, last_name, email, department, city, state) VALUES (?, ?, ?, ?, ?, ?, ?)`,
		[
			newEmployee.user_name, newEmployee.first_name,
			newEmployee.last_name, newEmployee.email,
			newEmployee.department, newEmployee.city,
			newEmployee.state
		]
	)

	let message = "Error created new employee"

	if (result.affectedRows) {
		message = 'Employee created successfully';
	}

	return {message};
}

module.exports = {
	getEmployee,
	getEmployeeById,
	createEmployee
}
