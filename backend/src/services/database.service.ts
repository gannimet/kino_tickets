import { Db, MongoClient, MongoError } from 'mongodb';

import { MONGO_URL, DATABASE_NAME } from '../app-config';

export class DatabaseService {

  private static _instance: DatabaseService
  private _connection: Db;

  private constructor() {}

  static getInstance(): DatabaseService {
    if (!this._instance) {
      this._instance = new DatabaseService();
    }

    return this._instance;
  }

  getConnection(): Promise<Db> {
    return new Promise((resolve, reject) => {
      if (!this._connection) {
        MongoClient.connect(MONGO_URL).then(
          (mongoClient: MongoClient) => {
            this._connection = mongoClient.db(DATABASE_NAME);

            resolve(this._connection);
          },
          (error: MongoError) => {
            console.log('Error creating database connection:', error);

            reject(error);
          }
        );
      } else {
        resolve(this._connection);
      }
    });
  }

}
