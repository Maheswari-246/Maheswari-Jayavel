const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
  },
  ingredients: {
    type: [String],
    required: [true, 'Please add ingredients'],
  },
  instructions: {
    type: String,
    required: [true, 'Please add instructions'],
  },
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);