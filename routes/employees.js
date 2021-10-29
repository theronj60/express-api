const express = require('express')
const router = express.Router()
const service = require('../services/service')

router.get('/', async function(req, res, next) {
	try {
		res.json(await service.getEmployee(req))
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

module.exports = router
	
