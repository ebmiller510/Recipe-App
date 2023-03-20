require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const methodOverride = require('method-override');


const db = require('./models');

const recipeControl = require('./controllers/recipes');
const reviewsControl = require('./controllers/reviews');
const { clear } = require('console');
const recipe = require('./models/recipe');
// const exp = require('constants');

const app = express();



const liveReloadServer = livereload.createServer();
liveReloadServer.server.once('connection', () => {
    setTimeout(() => {
        liveReloadServer.refresh('/');
    }, 150);
});


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))



//middleware
app.use(express.static('public'))
app.use(connectLiveReload())
//TBD if needed 
app.use(methodOverride('_method'))


app.use(express.urlencoded({ extended: true }))


//route mounting HERE WE GOOOOO:
////////////////////////////////

//this mounts the quick finds to the home page
app.get('/', function(req, res){
    db.Recipe.find({quickFinds: true})
        .then(recipes => {
            res.render('home', {
                recipes: recipes
            })
        })
})

//GET request to seed data
app.get('/seed', function(req, res){
    db.Recipe.deleteMany({})
        .then(removeItems => {
            console.log(`Removed ${removeItems.deletedCount} products`)

    
    db.Recipe.insertMany(db.seedItems)
            .then(addedItems => {
                console.log(`Added ${addedItems.length} items`)
                res.json(addedItems)
            })
        })
})

//about route: to be added later
// app.get('/about', function(req, res){
//     res.render('about')
// })


//ref line 11 (.)
app.use('/recipes', recipeControl)

app.use('/reviews', reviewsControl)
//404 route




app.listen(process.env.PORT, function(){
    console.log('Express is listeing on port', process.env.PORT)
})