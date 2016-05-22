var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var users = require('./routes/users');
var session = require('express-session');
var config = require('./config/config.js');
var connectMongo = require('connect-mongo')(session);
var mongoose = require('mongoose');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', users);

var ENV = process.env.NODE_ENV || 'development';

if (ENV == 'production') {
  console.log('running in production mode.')
  app.use(session({
    secret: config.secret,
    saveUninitialized: true,
    resave: true,
    store: new connectMongo({
      url: config.dbURL,
      stringify: true,
      mongooseConnection: mongoose.connections[0]
    })
  }));
} else {
  console.log('connecting to mongoDB locally');
  mongoose.connect('mongodb://127.0.0.1:27017/stportal');
}

// router thread.
app.use('/', require('./routes/index')(mongoose));




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
    
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;