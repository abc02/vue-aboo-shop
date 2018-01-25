var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/v1', proxy({target: 'http://abuapi.0577xiedu.net', changeOrigin: true}));
app.listen(3000);

