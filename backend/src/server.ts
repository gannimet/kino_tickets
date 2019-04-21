import * as express from 'express';
import bodyParser = require('body-parser');

import { CinemaController } from './controllers/cinema.controller';

const app = express();

app.use(bodyParser.json());

const cinemaCtrl = new CinemaController();

app.get('/halls', cinemaCtrl.getAllHalls.bind(cinemaCtrl));
app.put('/halls', cinemaCtrl.addHall.bind(cinemaCtrl));

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
