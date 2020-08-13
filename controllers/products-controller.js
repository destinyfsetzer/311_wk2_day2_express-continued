const products = require('./../data/products')
let counter = products.length+1

// list function
const listProduct = (req, res) => {
    // console.log('got the get', products)
    res.json(products)
}

// create function
const createProduct= (req, res) => {
    // bring my counter with me
    // req.body is the information put in postman ... gives it an id (with counter) which then pushes it into products
    products.push({_id: counter++, ...req.body})
    res.json(products[products.length -1])
}
// update function
const updateProduct= (req, res) => {
    let foundProduct= products.find( product=> product._id === parseInt(req.params.userId))
    foundProduct.name = req.body.name ? req.body.name : foundProduct.name
    foundProduct.description = req.body.description ? req.body.name : foundProduct.description
    foundProduct.imgUrl = req.body.imgUrl ? req.body.imgUrl : foundProduct.imgUrl
    foundProduct.price = req.body.price ? req.body.price : foundProduct.price
    foundProduct.category = req.body.category ? req.body.name : foundProduct.category
    foundProduct.reviews = req.body.reviews ? req.body.reviews : foundProduct.reviews
    res.json(foundProduct)
}
// delete function
const deleteProduct= (req, res) => {
    let foundProduct= products.find( product => product._id === parseInt(req.params.userId))
    if (foundProduct) {
        foundProduct.isActive = false
        res.send(`${req.params.userId} is gone`)
    } else {
        res.status(400).json({message: `No product with the id of ${req.params.userId}`})
    }
}
// show function
const showProduct= (req, res) => {
    let foundProduct= products.find( product => product._id === parseInt(req.params.userId))
    res.json(foundProduct)
}

module.exports = {
    listProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    showProduct
}
