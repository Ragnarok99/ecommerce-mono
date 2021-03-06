import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import 'dotenv/config';

import appRoutes from './routes';

const app = express();

app.set('port', process.env.PORT || 4000);
app.use(cors({ origin: '*' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.use(appRoutes);
//* Error Handler

// FIXME: This is throwing error
/* app.use((err: any, req: Request, res: Response) => {
  res.status(err.status || 500);
  res.json({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
}); */

export default app;
