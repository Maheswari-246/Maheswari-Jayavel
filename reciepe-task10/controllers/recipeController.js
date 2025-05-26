const Recipe = require('../models/recipe');  // Correct model import

const recipeController = {
  createRecipe: async (req, res) => {
    try {
      // get the details from the request body
      const { name, description, price } = req.body

      // check if the user already exists
      const recipeExists = await Recipe.findOne({ name });

      if (recipeExists) {
        res.status(500).json({ message: 'Recipe already exists' });
      }

      //create a new recipe object model
      const newRecipe = new Recipe({
        name,
        description,
        price
      });

      //save to the database
      await newRecipe.save();

      res.status(201).json({ message: 'Recipe created' });
    } catch (error) {
      res.status(500).json({ message: 'Recipe failed' });
    }
  },


  getAllRecipes: async (req, res) => {
    try {
      //find all the recipes from the database
      const recipes = await Recipe.find().select('-__v');

      res.status(200).json({ message: "Recipe created", recipes })

    } catch (error) {
      res.status(500).json({ message: "All the recipes failed" })
    }
  },
  getRecipeById: async (req, res) => {
    try {

      //Get the details from the request params
      const { id } = req.params;

      const recipes = await Recipe.findById(id).select('-__v');

      if (!recipes) {
        return res.status(404).json({ message: "Recipe not found" })
      }

      //send the response
      res.status(200).json(recipes);

    } catch (error) {
      res.status(500).json({ message: "Get recipe by id  failed" })

    }
  },
  updateRecipe: async (req, res) => {
    try {
      //Get the id from the request params
      const { id } = req.params;

      //get the data to update from the request body
      const { name, description, price } = req.body

      const recipe = await Recipe.findById(id)

      if (!recipe) {
        return res.status(404).json({ message: "Recipe not found" });
      }

      const updateRecipe = await Recipe.findByIdAndUpdate(id, { name, description, price }, { new: true });

      //send the response
      res.status(200).json({ message: "Recipe updated successfully", updateRecipe });
    } catch (error) {
      res.status(500).json({ message: "update recipe failed", error })
    }
  },
  deleteRecipe: async (req, res) => {
    try {
      const { id } = req.params;

      const recipe = await Recipe.findById(id);
      if (!recipe) {
        return res.status(404).json({ message: "Recipe Not found" });
      }

      const deleteRecipe = await Recipe.findByIdAndDelete(id)
      res.status(200).json({ message: "recipe deleted succesfully" })
    } catch (error) {
      res.status(500).json({ message: "delete recipe failed" })
    }
  }
}

module.exports = recipeController;