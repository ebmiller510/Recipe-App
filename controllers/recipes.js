//Server.js looks in here due to line 67 (server.js)


//
const express = require('express')
const router = express.Router()

const db = require('../models')


//index route----G2G
router.get('/', function(req, res){
    db.Recipe.find({})
    .then(recipes => {
        res.render('recipe-index', {
            Recipe: recipes
        })
    })
})


//to display all of the created recipes SHOW ROUTE-----G2G
router.get('/', function(req, res){
    db.Recipe.find({})
        .then(recipes => {
            res.render('recipe-index', {
                Recipe: recipes
            })
        })
})


//NEW RECIPE ROUTE 
router.get('/new', (req, res) => {
    res.render('new-recipe')
})

//CREATE RECIPE ROUTE
router.post('/', (req, res) => {
    db.Recipe.create(req.body)
    .then(recipe => {
        res.redirect('/recipes/' + recipe._id)
    })
})




//get item by generated id SHOW ROUTE---G2G
router.get('/:id', function(req, res){

    db.Recipe.findById(req.params.id)
    .then(recipe => {
        res.render('recipe-details', {
            recipe: recipe
        })
    })        
    .catch(() => res.send('404 Error: Page Not Found'))

})


//


module.exports = router