const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/user.routes");
const itemRoute = require("./routes/item.routes");

//setup routes
module.exports = function (app) {
  authRoute(app);
  userRoute(app);
  itemRoute(app);
};
