const { Product } = require("../Model/ProductsModel");

//add new product

//add new product
const addProduct = async (req, res) => {
  const { title, description, price, image, category } = req.body;
  console.log(req.body);

  const newProduct = new Product(req.body);
  try {
    await newProduct.save();
    return res
      .status(201)
      .json({ status: 201, message: "Product added successfully." });
  } catch (error) {
    // console.log(error)
    res.status(400).send("something went wrong");
  }
};

const getProducts = async (req, res) => {
  res
    .status(200)
    .json({ message: "OK", list: ["list of products", "hello"], count: 299 });
};

const getProductDetails = async (req, res) => {
  res
    .status(200)
    .json({ message: "OK", list: ["product details", "hello"], count: 299 });
};

const editProduct = async (req, res) => {
  res
    .status(200)
    .json({ message: "OK", list: ["product updated", "hello"], count: 299 });
};

const deleteProduct = async (req, res) => {
  res
    .status(200)
    .json({ message: "OK", list: ["product deleted", "hello"], count: 299 });
};

module.exports = {
  addProduct,
  getProducts,
  getProductDetails,
  editProduct,
  deleteProduct,
};
