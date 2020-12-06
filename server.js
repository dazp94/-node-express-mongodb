const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

const DBCONNECTION = process.env.DB_CONNECTION;
const app = express();

// enable for corsOptions

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

const db = require("./app/models");
const setup = require("./app/setup");

db.mongoose
  .connect(DBCONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    setup();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

// register routes
require("./app/routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
