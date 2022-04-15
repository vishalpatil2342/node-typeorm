import { DataSource} from 'typeorm';
import { User } from './entity/user.entity';


export const connection = new DataSource({
  type: "mysql",
  host: "localhost",
  database: "typeorm",
  port: 3306,
  entities: [User],
  username: "root",
  password: "vishal",
  synchronize: true,
  logging:true
});