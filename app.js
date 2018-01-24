// include dependencies
var express = require('express');
var proxy = require('http-proxy-middleware');

// proxy middleware options
var options = {
        target: 'https://abuapi.0577xiedu.net', // target host
        changeOrigin: true,               // needed for virtual hosted sites
        ws: true,                         // proxy websockets
        pathRewrite: {
            '^/v1' : '',     // rewrite path
        },
        router: {
            // when request.headers.host == 'dev.localhost:3000',
            // override target 'http://www.example.org' to 'http://localhost:8000'
            'dev.localhost:3000' : 'https://abuapi.0577xiedu.net'
        }
    };

// create the proxy (without context)
var exampleProxy = proxy(options);

// mount `exampleProxy` in web server
var app = express();
    app.use('/v1', exampleProxy);
    app.listen(3000);