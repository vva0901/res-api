const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('./connect/index');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const storeAPI = require('./api/store');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/store', storeAPI)

module.exports = app;
