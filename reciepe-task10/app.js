const express = require('express');
const recipeRouter = require('./routes/recipeRoutes');
const errorRoute = require('./utils/errorRoute');


const app=express();

// middleware to parse the request body
app.use(express.json());
app.use("/api/recipes",recipeRouter);
app.get("/",(req,res)=>{
    res.send("server is running..")
})

// middleware to handle 404 errors
app.use(errorRoute);
module.exports=app;