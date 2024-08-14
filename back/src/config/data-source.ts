import { DataSource } from 'typeorm';
import { DB_HOST, DB_NAME , DB_PASSWORD, DB_PORT, DB_USERNAME} from './envs'
import { User } from '../entities/UserEntity';


export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST || 'localhost',
  port: Number (DB_PORT) || 5432,
  username:  DB_USERNAME,
  password:  DB_PASSWORD,
  database:  DB_NAME, //This database must be created before initialize the typeorm
  dropSchema: false, //Erase database content when the server starts
  synchronize: true,
  logging: false, // Don't log queries in the console
  entities: [User],
  subscribers: [],
  migrations: [],
});


