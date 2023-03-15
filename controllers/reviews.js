const express = require('express')
const router = express.Router()


const db = require('../models');
const recipe = require('../models/seedReviews')



router.get('/', function(req, res){
    res.render('review-form')
})



router.post('/create', function(req, res){
    console.log(req.body)
})

module.exports = router