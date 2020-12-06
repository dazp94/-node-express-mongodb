const db = require("../models");
const Product = db.product;

const createProduct = (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const category = req.body.category;

  if (!name) {
    res.status(500).json({
      error: "No name was provided"
    });
    return;
  }
  if (!price) {
    res.status(500).json({
      error: "No price was provided"
    });
    return;
  }
  if (isNaN(price)) {
    res.status(500).json({
      error: "The price provided is not a number"
    });
    return;
  }
  if (!category) {
    res.status(500).json({
      error: "No category was provided"
    });
    return;
  }

  const product = new Product({
    name,
    price,
    category
  });

  product
    .save()
    .then(() => {
      res.status(200).json({
        message: `Product created successfully`,
        product
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err
      });
    });
};

const deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((result) => {
      if (result.deletedCount) {
        res.status(200).json({
          message: `Product with id ${req.params.id} deleted`
        });
      } else {
        res.status(400).json({
          message: "No product found for the provided id"
        });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err
      });
    });
};

const deleteProducts = (req, res) => {
  Product.deleteMany({ _id: { $in: req.body.ids } })
    .then(() => {
      res.status(200).json({
        message: "Products deleted successfully"
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err
      });
    });
};

const getAllProductsByName = (req, res) => {
  Product.find({ name: { $regex: RegExp(req.params.name, "i") } })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err
      });
    });
};

const getAllProducts = (req, res) => {
  Product.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err
      });
    });
};

module.exports = {
  createProduct,
  deleteProduct,
  deleteProducts,
  getAllProducts,
  getAllProductsByName
};
