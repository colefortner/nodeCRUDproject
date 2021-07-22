const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NutritionSchema = new Schema({
    food: String,
    protein: Number ,
    fat: Number,
    carbs: Number,
})

module.exports = mongoose.model('Nutrition', NutritionSchema);



