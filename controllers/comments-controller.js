const comments = require('./../data/comments')
let counter = comments.length+1

// list function
const listComment = (req, res) => {
    // console.log('got the get', comments)
    res.json(comments)
}

// create function
const createComment = (req, res) => {
    // bring my counter with me
    // req.body is the information put in postman ... gives it an id (with counter) which then pushes it into comments
    comments.push({_id: counter++, ...req.body})
    res.json(comments[comments.length -1])
}
// update function
const updateComment= (req, res) => {
    let foundComment = comments.find( comment => comment._id === parseInt(req.params.userId))
    foundComment.body = req.body.body ? req.body.body : foundComment.body
    foundComment.postId = req.body.postId ? req.body.postId : foundComment.postId
    res.json(foundComment)
}
// delete function
const deleteComment = (req, res) => {
    let foundComment = comments.find( comment => comment._id === parseInt(req.params.userId))
    if (foundComment) {
        foundComment.isActive = false
        res.send(`${req.params.userId} is gone`)
    } else {
        res.status(400).json({message: `No comment with the id of ${req.params.userId}`})
    }
}
// show function
const showComment = (req, res) => {
    let foundComment = comments.find( comment => comment._id === parseInt(req.params.userId))
    res.json(foundComment)
}

module.exports = {
    listComment,
    createComment,
    updateComment,
    deleteComment,
    showComment
}
