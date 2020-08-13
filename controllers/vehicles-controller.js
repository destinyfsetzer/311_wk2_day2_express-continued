const vehicles = require('./../data/vehicles')
let counter = vehicles.length+1

// list function
const listVehicle = (req, res) => {
    // console.log('got the get', vehicles)
    res.json(vehicles)
}

// create function
const createVehicle = (req, res) => {
    // bring my counter with me
    // req.body is the information put in postman ... gives it an id (with counter) which then pushes it into vehicles
    vehicles.push({_id: counter++, ...req.body})
    res.json(vehicles[vehicles.length -1])
}
// update function

const updateVehicle = (req, res) => {
    let foundVehicle = vehicles.find( vehicle => vehicle._id === parseInt(req.params.userId))
    vehicles.imgUrl = req.body.imgUrl ? req.body.imgUrl : vehicles.imgUrl
    vehicles.year = req.body.year ? req.body.name : vehicles.year
    vehicles.make = req.body.make ? req.body.make : vehicles.make
    vehicles.model = req.body.model ? req.body.model : vehicles.model
    vehicles.price = req.body.price ? req.body.name : vehicles.price
    vehicles.km = req.body.km ? req.body.km : vehicles.km
    vehicles.miles = req.body.miles ? req.body.miles : vehicles.miles
    vehicles.fuel = req.body.fuel ? req.body.fuel : vehicles.fuel
    vehicles.city = req.body.city ? req.body.city : vehicles.city
    vehicles.isNew = req.body.isNew ? req.body.isNew : vehicles.isNew
    res.json(vehicles)
}
// delete function
const deleteVehicle = (req, res) => {
    let foundVehicle = vehicles.find( Vehicle => Vehicle._id === parseInt(req.params.userId))
    if (foundVehicle) {
        foundVehicle.isActive = false
        res.send(`${req.params.userId} is gone`)
    } else {
        res.status(400).json({message: `No contact with the id of ${req.params.userId}`})
    }
}
// show function
const showVehicle = (req, res) => {
    let foundVehicle = vehicles.find( Vehicle => Vehicle._id === parseInt(req.params.userId))
    res.json(foundVehicle)
}

module.exports = {
    listVehicle,
    createVehicle,
    updateVehicle,
    deleteVehicle,
    showVehicle
}