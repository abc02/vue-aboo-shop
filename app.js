var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/v1', proxy({target: 'http://datainterface.abpao.com', changeOrigin: true}));
app.listen(3000);

