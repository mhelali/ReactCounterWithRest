////wEBSITE
var express = require('express'),
  app = express(),
  port = process.env.PORT || 4206,
  bodyParser = require('body-parser'),
  cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('/api/*', function (req, res, next) {
  if ('OPTIONS' != req.method) {
    var token = '';
    if (req.headers.authorizationkey && req.headers.authorizationvalue) {
      token = req.headers.authorizationkey;
    };
    if (token == '') {
      res.status(401).json({
        "status": 401,
        "error": [],
        "message": "No token supplied"
      });
    } else {
      //varify token
      if (req.headers.authorizationkey =='abc@gmail.com' && req.headers.authorizationvalue == '123') {
        next();
      }else{
        res.status(401).json({
          "status": 401,
          "error": [],
          "message": "Not authorized"
        });
      }
      
    }
  }else{
    next(); 
  }
  
});

app.use(cors());

var routes = require('./api/routes/homeRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('RESTful API server started on: ' + port);