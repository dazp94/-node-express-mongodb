const db = require("../models");
const User = db.user;

const allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

const userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

const isAdmin = (req, res) => {
  res.status(200).send(true);
};

const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).send({ users });
};

const deleteUser = async (req, res) => {
  const users = await User.findOneAndDelete({ _id: req.body.id });
  res.status(200).send({ users });
};

const moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

module.exports = {
  allAccess,
  userBoard,
  deleteUser,
  isAdmin,
  getUsers,
  moderatorBoard
};
