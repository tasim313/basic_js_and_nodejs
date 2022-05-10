// const http = require('http');
// const routes = require('./routes');


// const server =  http.createServer(routes);

// server.listen(5000);

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(5000);


const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) =>{
    console.log('Quick Learn Quick Work and Qucik Move');
    next(); // Allow the request to continue to the next middleware in line
});

app.use((req, res, next) =>{
    console.log('Technology change very rapidly');
    res.send("<h1>Hello From Express Js</h1>");
});

const server = http.createServer(app);
server.listen(3000);