const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require("cors");
const { readdirSync } = require('fs');
const multer = require('multer');
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

const PORT = 4000;

const routesPath = path.join(__dirname, 'routes');
readdirSync(routesPath).map((file: string) => {
    const routes = require(path.join(routesPath, file));
    app.use('/api', routes);
});

app.use('/uploads', express.static('uploads'));

app.listen(PORT, '0.0.0.0' ,() => {
    console.log(`Server is running on port ${PORT}`);
})