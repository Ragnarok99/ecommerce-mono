import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';

import 'dotenv/config';

import appRoutes from './routes';

const app = express();

app.set('port', process.env.PORT || 4000);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.use(appRoutes);

export default app;
