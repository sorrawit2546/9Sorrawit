import express from 'express';
import { Response , Request } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
const cors = require("cors");
const {readdirSync} = require('fs');

const app = express();


app.use(express());
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

const PORT = 4000;

//app.use('/api' , require('./routes/auth'));
readdirSync('./src/routes').map((item:string)=>app.use('/api',require('./routes/'+ item)));

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})