const express = require('express')
const { Router } = require('express')
const router = Router()
const commentsController = require('../controllers/comments-controller')

router.get('/comments', commentsController.listComment)

router.post('/comments', commentsController.createComment )

router.put('/comments/:userId', commentsController.updateComment )

router.delete('/comments/:userId', commentsController.deleteComment)

router.get('/comments/:userId', commentsController.showComment )

module.exports = router