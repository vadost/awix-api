import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { config } from './configs/config';
import { routing } from './controllers/index';
import { models } from './models/index';

const app: express.Application = express();
const port: number = process.env.PORT || 3000;

app.set('config', config);
app.set('models', models);

app.use(cors());
app.use(bodyParser.json());
app.use(routing);

app.all('*', (req: express.Request, res: express.Response, next: express.NextFunction): void => {
  res.status(404).json({
    error: 'Route not found.',
  });
});

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction): void => {
  res.status(500).json(err);
});

app.listen(port, (): void => {
  const env = process.env.NODE_ENV || 'development';
  console.log(`Listening on port ${port}, env "${env}"`);
});