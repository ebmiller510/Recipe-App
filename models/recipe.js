const mongoose = require('mongoose');

//recipe schema 
//two thoughts about me secondary schema:
//the drink vs food schema is too similar
//so should I make a schema called ingredients and reference it in the recipe schema...that way the units and all that will be uniform and the ingredients key here will be an array of objects
//orrrrrrr should I have a secondary category schema that will have "cusine: italian, random, thai, chinese, mexican, greek etc", "category : dessert, dinner, lunch, snack, alc, drink"



const recipeSchema = new mongoose.Schema({
    recipeType: {type: String, enum: ["food", "drink"]},
    recipeName: {type: String, required: true},
    photo: {type: String},
    description: {type: String},
    numOfIng: {type: Number, min: 1},
    ingredients: {type: [String]},
    quickFinds: {type: Boolean, default: false},
    instructions: String
})

//name of the model is 'Recipe' and it follows the schema defined in the variable recipeSchema
module.exports = mongoose.model('Recipe', recipeSchema)