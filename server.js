var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var cors = require('cors')
var app = express()

app.use(cors())
 
var app = express();
var PORT = process.env.PORT || 3060;

app.use(express.static("public")); 

app.engine("handlebars", exphbs({ defaultLayout : "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function(){
    console.log("Server is listening on: http://localhost:" + PORT)
});

