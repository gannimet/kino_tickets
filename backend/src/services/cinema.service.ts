import { Db, MongoError } from 'mongodb';

import { Hall } from '../models/hall';
import { DataAccessor } from './data-accessor';

export class CinemaService extends DataAccessor {

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
