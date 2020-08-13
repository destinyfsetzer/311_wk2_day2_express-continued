const express = require('express')
const { Router } = require('express')
const router = Router()
const contactsController = require('../controllers/contacts-controller')

router.get('/contacts', contactsController.listContact)

router.post('/contacts', contactsController.createContact )

router.put('/contacts/:userId', contactsController.updateContact )

router.delete('/contacts/:userId', contactsController.deleteContact)

router.get('/contacts/:userId', contactsController.showContact )

module.exports = router