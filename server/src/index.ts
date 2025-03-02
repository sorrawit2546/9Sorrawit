const express = require('express');
import { Response , Request } from 'express';
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require("cors");
const {readdirSync} = require('fs');

const app = express();


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

const PORT = 4000;

//app.use('/api' , require('./routes/auth'));
readdirSync('./src/routes').map((item:string)=>app.use('/api',require('./routes/'+ item)));

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})