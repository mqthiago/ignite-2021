import express from 'express';
import { join } from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import { router } from './routes';

import './database';

const swaggerDocument = YAML.load(join(__dirname, 'swagger.yml'));

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(router);

app.listen(3333, () => console.log('Server is running!'));
