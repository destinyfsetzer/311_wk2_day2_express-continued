const express = require('express')
const { Router } = require('express')
const router = Router()
const vehiclesController = require('../controllers/vehicles-controller')

router.get('/vehicles', vehiclesController.listVehicle)

router.post('/vehicles', vehiclesController.createVehicle )

router.put('/vehicles/:userId', vehiclesController.updateVehicle )

router.delete('/vehicles/:userId', vehiclesController.deleteVehicle)

router.get('/vehicles/:userId', vehiclesController.showVehicle )

module.exports = router