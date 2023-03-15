const express = require('express');
const { Recipe } = require('../models');
const router = express.Router()


const db = require('../models');
const recipe = require('../models/seedReviews')


//new route
router.get('/new/:id', function(req, res){
    res.render('review-form', {
        id : req.params.id
    })
})


//create route 
router.post('/create/:id', function(req, res){
    console.log(req.body)
    db.Recipe.findByIdAndUpdate(req.params.id,
   
    { $push: { reviews: req.body } },
    { new: true }
        )

        .then(recipe => res.redirect(`/recipes/${req.params.id}`))

})

//destroy route



module.exports = router