const express = require('express') 594.1k (gzipped: 243.0k);
const app =express();
app.use(express.static('../dist'))

module.exports = app;