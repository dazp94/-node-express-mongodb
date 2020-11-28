const { authJwt } = require("../middlewares");
const controller = require("../controllers/item");

const ITEMS_ROUTE = "/api/items";

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(`${ITEMS_ROUTE}/:name`, controller.getAllItemsByName);

  app.get(ITEMS_ROUTE, controller.getAllItems);

  app.post(ITEMS_ROUTE, controller.createItem);

  app.delete(
    `${ITEMS_ROUTE}/:id`,
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteItem
  );
  app.delete(
    `${ITEMS_ROUTE}`,
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteItems
  );
};
