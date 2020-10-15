var express = require('express');

var app = express();

// A node http.Server is returned, with this application (which is a Function) as its callback. 
// If you wish to create both an HTTP and HTTPS server 
// you may do so with the "http" and "https" modules  
app.listen(3000);