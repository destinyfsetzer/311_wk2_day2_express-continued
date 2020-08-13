const contacts = require('./../data/contacts')
let counter = contacts.length+1

// list function
const listContact = (req, res) => {
    // console.log('got the get', contacts)
    res.json(contacts)
}

// create function
const createContact = (req, res) => {
    // bring my counter with me
    // req.body is the information put in postman ... gives it an id (with counter) which then pushes it into contacts
    contacts.push({_id: counter++, ...req.body})
    res.json(contacts[contacts.length -1])
}
// update function
const updateContact = (req, res) => {
    let foundContact = contacts.find( contact => contact._id === parseInt(req.params.userId))
    foundContact.name = req.body.name ? req.body.name : foundContact.name
    foundContact.occupation = req.body.occupation ? req.body.name : foundContact.occupation
    foundContact.avatar = req.body.avatar ? req.body.avatar : foundContact.avatar
    res.json(foundContact)
}
// delete function
const deleteContact = (req, res) => {
    let foundContact = contacts.find( contact => contact._id === parseInt(req.params.userId))
    if (foundContact) {
        foundContact.isActive = false
        res.send(`${req.params.userId} is gone`)
    } else {
        res.status(400).json({message: `No contact with the id of ${req.params.userId}`})
    }
}
// show function
const showContact = (req, res) => {
    let foundContact = contacts.find( contact => contact._id === parseInt(req.params.userId))
    res.json(foundContact)
}

module.exports = {
    listContact,
    createContact,
    updateContact,
    deleteContact,
    showContact
}
