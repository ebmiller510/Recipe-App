//DONE 


///this file connects to the DB and also 
//contains all of the exported models
require('dotenv').config()
const mongoose = require('mongoose');
const mongodbUri = process.env.MONGODBURI;


(async function (){
    await mongoose.connect(mongodbUri);
    console.log('Mongoose is conected', mongodbUri)
})().catch(err => console.log('Mongo DB connection error: \n' + err))


module.exports ={
    //this one points to models/recipe.js
    Recipe: require('./recipe'),
    seedItems: require('./seed')
}