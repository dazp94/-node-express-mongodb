const { authJwt } = require("../middlewares");
const controller = require("../controllers/product");

const PRODUCTS_ROUTE = "/api/products";

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(`${PRODUCTS_ROUTE}/:name`, controller.getAllProductsByName);

  app.get(PRODUCTS_ROUTE, controller.getAllProducts);

  app.post(PRODUCTS_ROUTE, controller.createProduct);

  app.delete(
    `${PRODUCTS_ROUTE}/:id`,
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteProduct
  );
  app.delete(
    `${PRODUCTS_ROUTE}`,
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteProducts
  );
};
