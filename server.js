const express = require("express");
const connection = require('./config/connection.js');

// for heroku deployment
const PORT = process.env.PORT || 8080;

const app = express();

var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
   extended: false
}));

// Parse application body as JSON
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
