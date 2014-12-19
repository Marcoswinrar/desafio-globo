// Setup Requirements
var express      = require('express');
var app          = express();
var port         = process.env.PORT || 8080;
var bodyParser   = require('body-parser');

// Define bodyParser and setups
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Define view engine (maybe change to jade later)
app.set('view engine', 'ejs');

// Call routes
require('./routes/routes.js')(app);

// Define assets
app.use(express.static(__dirname + '/app'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/img", express.static(__dirname + '/img'));
app.use("/js", express.static(__dirname + '/js'));

// Init server at port
app.listen(port);
console.log('Server uses port: ' + port);