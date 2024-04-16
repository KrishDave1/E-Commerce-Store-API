/** @format */

const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({
    // featured: true, This gives only products which have featured as true.
    // name: "name" , This gives only products which have name as name.
  });
  res.status(200).json({ products, nbHits: products.length });

  // throw new Error('testing async errors');
  //! One important thing to notice is I directly throw an error in controller while earlier in Task Manager I used next() and passed the custom error handler to the next() function as an argument.
};

const getAllProducts = async (req, res) => {
  const { featured, company } = req.query;
  //All this filtering and checking is done so that if I give a timepass query which is not defined inside the model of the product then our code should ignore it.
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }
  const products = await Product.find(queryObject);
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
