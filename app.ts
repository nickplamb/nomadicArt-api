import express from 'express';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
import morgan from 'morgan';


const app = express();

dotenv.config();
const port = process.env.PORT;
const devMode = process.env.DEVMODE;

let loggingMode = 'common';
// Middleware
if(devMode) {
  loggingMode = 'dev'
}
app.use(morgan(loggingMode));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`app listening on port ${port}. https://localhost:${port}`);
});
