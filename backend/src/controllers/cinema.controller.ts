import { Db, MongoError } from 'mongodb';

import { Hall } from '../models/hall';
import { DatabaseController } from './database.controller';

export class CinemaController extends DatabaseController {

  async getAllHalls(): Promise<Hall[] | MongoError> {
    return this.databaseService
      .getConnection()
      .then(
        (db: Db) => {
          return db
            .collection('halls')
            .find()
            .toArray();
        },
        (error: MongoError) => {
          return error;
        }
      )
  }

  async addHall(hall: Hall): Promise<any | MongoError> {
    return this.databaseService
      .getConnection()
      .then(
        (db: Db) => {
          return db
            .collection('halls')
            .insertOne(hall);
        },
        (error: MongoError) => {
          return error;
        }
      );
  }

}
