var  express = require("express");
var connection = require('./config/connection.js');
var bodyParser = require('body-parser');

var app = express();


// must use port 8080 for heroku deployment
var PORT = process.env.PORT || 8080;

//middleware 

//serve static files from public directory
app.use(express.static("public"));

//parse application body as json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());


//handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// start server
app.listen(PORT, function() {
  console.log("Express web server listening at http://localhost:" + PORT);
});
