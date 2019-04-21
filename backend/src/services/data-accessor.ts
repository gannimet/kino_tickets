import { DatabaseService } from '../services/database.service';

export abstract class DataAccessor {

  protected databaseService: DatabaseService;

  constructor() {
    this.databaseService = DatabaseService.getInstance();
  }

}
