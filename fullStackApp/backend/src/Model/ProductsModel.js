const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 255,
  },
  description: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  // category: {
  //   type: String,
  //   ref: "Category",
  //   enum: ['tshirt', 'jeans', 'any'], 
  //   default: 'any',
  //   ref: 'Category'
  // },

});

const Product = mongoose.model("Products", productSchema);

exports.Product = Product;