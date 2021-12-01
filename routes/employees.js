const express = require('express')
const router = express.Router()
const service = require('../services/service')

router.get('/', async function(req, res, next) {
	try {
		const employee = await service.getEmployee(req)
		const page = req.query.page
		const limit = req.query.limit
		const startIndex = (page - 1) * limit
		const endIndex = page * limit
		const result = employee.slice(startIndex, endIndex)
		if (result.length > 0) {
			res.json(result)
		} else {
			res.json(await service.getEmployee(req))
		}
	} catch (err) {
		console.error(`Error while getting employees ${err.message}`)
		next(err)
	}
})
router.get('/:id', async function(req, res, next) {
	try {
		res.json(await service.getEmployeeById(req.params.id))
	} catch (err) {
		console.error(`Error while getting employee ${err.message}`)
		next(err)
	}
})

router.post('/create', async function(req, res, next) {
	 try {
	   res.json(await service.createEmployee(req.body));
	 } catch (err) {
	   console.error(`Error while creating employee`, err.message);
	   next(err);
	 }
});

module.exports = router
	
