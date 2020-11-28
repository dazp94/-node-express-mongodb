const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth");

const AUTH_ROUTE = "/api/auth";

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    `${AUTH_ROUTE}/signup`,
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post(`${AUTH_ROUTE}/signin`, controller.signin);
};
