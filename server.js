const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const scribeLog = require('scribe-js')();
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const PORT = process.env.PORT || 3000;


var app = express();

// Logging
app.use(scribeLog.express.logger());
app.use('/logs', scribeLog.webPanel());

app.use(express.static(path.join(__dirname, 'build')));

app.use(favicon(__dirname + '/build/favicon.ico'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.set('views', path.join(__dirname, 'build'));
app.set('views engine', 'html');
app.engine('html', ejs.renderFile);


app.use('/*', (req, res, next) => {
    res.render('index.html');
    next();
});

app.listen(PORT, function (req, res) {
    console.log('Server is running on the port : ' + PORT);
});