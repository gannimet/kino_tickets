import express = require('express');

import { CinemaService } from '../services/cinema.service';
import { Hall } from '../models/hall';

export class CinemaController {

  private cinemaService = new CinemaService();

  getAllHalls(req: express.Request, res: express.Response) {
    this
      .cinemaService
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
  }

  addHall(req: express.Request, res: express.Response) {
    const hall: Hall = req.body;

    this
      .cinemaService
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
  }

}
