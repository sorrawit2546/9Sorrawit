"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var morgan_1 = require("morgan");
var cors = require("cors");
var readdirSync = require('fs').readdirSync;
var app = (0, express_1.default)();
app.use((0, express_1.default)());
app.use(cors());
app.use(body_parser_1.default.json());
app.use((0, morgan_1.default)('dev'));
var PORT = 4000;
//app.use('/api' , require('./routes/auth'));
readdirSync('./src/routes').map(function (item) { return app.use('/api', require('./routes/' + item)); });
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
