var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//route
var login = require('./routes/login/login');
var menus = require('./routes/menu/menu');
var faculty = require('./routes/faculty/faculty');
var department = require('./routes/department/department');
var section = require('./routes/section/section');
//#region user-management
var getdatauser = require('./routes/user-management/getdatauser');
//#endregion user-management
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/login',login);
app.use('/getmenus',menus);
app.use('/getfaculty',faculty);
app.use('/getdepartment',department);
app.use('/section',section);
//#region user-management
app.use('/getdatauser',getdatauser);
//#endregion user-management
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
