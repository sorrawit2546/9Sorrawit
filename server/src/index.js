"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var app = (0, express_1.default)();
app.use((0, express_1.default)());
app.use(body_parser_1.default.json());
var PORT = 4000;
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
