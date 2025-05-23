const express = require('express');
const { createRecipe, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe } = require('../controllers/recipeController');

const router = express.Router();

// Create a Recipe
router.post('/', createRecipe);

// Get all Recipes
router.get('/', getAllRecipes);

// Get a Recipe by ID
router.get('/:id', getRecipeById);

// Update a Recipe
router.put('/:id', updateRecipe);

// Delete a Recipe
router.delete('/:id', deleteRecipe);

module.exports = router;