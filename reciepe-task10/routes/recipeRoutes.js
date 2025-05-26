// import express module
const express = require('express');
const { createRecipe, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe} = require('../controllers/recipeController');

// create a router
const recipeRouter = express.Router();

recipeRouter.post("/", createRecipe);
recipeRouter.get("/", getAllRecipes);
recipeRouter.get("/:id",getRecipeById);
recipeRouter.put("/:id",updateRecipe);
recipeRouter.delete("/:id",deleteRecipe);

module.exports=recipeRouter;