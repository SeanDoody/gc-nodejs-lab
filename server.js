'use strict';
const http = require('http');
const quotes = require('./quotes.js');

http.createServer((req, res) => {
    res.write(quotes.randomQuote());
    res.end();
}).listen(3000);