const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./models/user");
db.role = require("./models/role");
db.product = require("./models/product");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
