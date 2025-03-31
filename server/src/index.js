var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require("cors");
var readdirSync = require('fs').readdirSync;
var multer = require('multer');
var path = require('path');
var app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
var PORT = 4000;
//app.use('/api' , require('./routes/auth'));
readdirSync('./src/routes').map(function (item) { return app.use('/api', require('./routes/' + item)); });
app.use('/uploads', express.static('uploads'));
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
