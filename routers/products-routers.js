const express = require('express')
const { Router } = require('express')
const router = Router()
const productsController = require('../controllers/products-controller')

router.get('/products', productsController.listProduct)

router.post('/products', productsController.createProduct )

router.put('/products/:userId', productsController.updateProduct )

router.delete('/products/:userId', productsController.deleteProduct)

router.get('/products/:userId', productsController.showProduct )

module.exports = router