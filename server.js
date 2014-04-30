#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var http = require('http');
var app = express();


var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

http.createServer(app).listen(8080,process.env.OPENSHIFT_NODEJS_IP, function () {
	console.log('Express server listening on port ');
});

