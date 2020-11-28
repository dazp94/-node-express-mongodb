const db = require("../models");
const Item = db.item;

const createItem = (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

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

  const item = new Item({
    name,
    price
  });

  item
    .save()
    .then(() => {
      res.status(200).json({
        message: `Item created successfully`,
        item
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err
      });
    });
};

const deleteItem = (req, res) => {
  Item.deleteOne({ _id: req.params.id })
    .then((result) => {
      if (result.deletedCount) {
        res.status(200).json({
          message: `Item with id ${req.params.id} deleted`
        });
      } else {
        res.status(400).json({
          message: "No item found for the provided id"
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

const deleteItems = (req, res) => {
  Item.deleteMany({ _id: { $in: req.body.ids } })
    .then(() => {
      res.status(200).json({
        message: "Items deleted successfully"
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err
      });
    });
};

const getAllItemsByName = (req, res) => {
  Item.find({ name: { $regex: RegExp(req.params.name, "i") } })
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

const getAllItems = (req, res) => {
  Item.find()
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
  createItem,
  deleteItem,
  deleteItems,
  getAllItems,
  getAllItemsByName
};
