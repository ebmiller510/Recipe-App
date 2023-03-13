//Server.js looks in here due to line 67 (server.js)


//
const express = require('express')
const router = express.Router()

const db = require('../models')


//index route 
router.get('/', function(req, res){
    db.Recipe.find({})
    .then(recipes => {
        res.render('recipe-index', {
            Recipe: recipes
        })
    })
})

//get item by generated id 


module.exports = router