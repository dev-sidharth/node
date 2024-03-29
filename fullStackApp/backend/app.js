const express = require('express');
const mongoose = require("mongoose");
// var bodyParser = require('body-parser')
const userRoutes = require('./src/Routes/user');
const routes = require('./src/Routes/products')

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(routes);


const connnectDb = async () => {
    try {
       await mongoose.connect("mongodb+srv://testingUser:Admin%40123@cluster0.0q69v4y.mongodb.net/");
       console.log('mongo connected')
    } catch (error) {
       console.log(error, 'mongodb connection error')
    }
 }
 
connnectDb();

const port = process.env.PORT || 4000;

app.listen(port, ()=> {
    console.log(`Happy coding at ${port}`);
})