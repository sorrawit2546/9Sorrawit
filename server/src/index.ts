import express from 'express';
import { Response , Request } from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(express());
app.use(bodyParser.json());

const PORT = 4000;

app.get('/' , (req: Request , res: Response) => {
    res.send('Hello World');
})

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})


