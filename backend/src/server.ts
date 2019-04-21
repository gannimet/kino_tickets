import * as express from 'express';
import { CinemaController } from './controllers/cinema.controller';
import { Hall } from './models/hall';
import bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let cinemaCtrl = new CinemaController();

app.get('/halls', (req, res) => {
  cinemaCtrl
    .getAllHalls()
    .then(
      (data: any[]) => {
        res.json(data);
      },
      (error: Error) => {
        console.log('erorr:', error);
        res.status(500).json({
          error
        });
      }
    );
});

app.put('/halls', (req, res) => {
  const hall: Hall = req.body;

  cinemaCtrl
    .addHall(hall)
    .then(
      (data: any) => {
        res.json({
          success: true
        });
      },
      (error: Error) => {
        res.status(500).json({
          error
        });
      }
    );
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
