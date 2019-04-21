import { DatabaseService } from '../services/database.service';

export abstract class DatabaseController {

  protected databaseService: DatabaseService;

  constructor() {
    this.databaseService = DatabaseService.getInstance();
  }

}
