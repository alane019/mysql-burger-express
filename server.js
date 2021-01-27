const express = require("express");
const connection = require('./config/connection.js');
var routes = require("./controllers/burgers_controller.js");

const app = express();

app.use(express.static(__dirname + '/public'));

// for heroku deployment
var PORT = process.env.PORT || 8080;


var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
   extended: false
}));

// Parse application body as JSON
app.use(bodyParser.json());
const router = express.Router();


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
