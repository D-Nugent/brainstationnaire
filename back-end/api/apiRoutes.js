const express = require('express')
const router = express.Router()
const questions = require('./routes/questions.json')

router.route('/questions')
.get((req, res) => {
    const returnedQuestion = questions.shift(0,1)
    res.status(200).send(returnedQuestion)
})

module.exports = router