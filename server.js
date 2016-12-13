var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override");
mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

app.use(router);

app.get('/', function (req, res) {
  res.send("Hello world!");
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
});

routes = require('./routes/tvshows')(app);

mongoose.connect('mongodb://ixshel:ixshel@ds133418.mlab.com:33418/tvshowsdemo', function (err, res) {
  if (err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Node server running on http://localhost");
});