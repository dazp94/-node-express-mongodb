const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/user.routes");
const productRoute = require("./routes/product.routes");

//setup routes
module.exports = function (app) {
  authRoute(app);
  userRoute(app);
  productRoute(app);
};
