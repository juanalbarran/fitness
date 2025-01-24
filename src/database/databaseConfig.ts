import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import * as path from 'path';

config({ path: '.env' });

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT ? +process.env.DATABASE_PORT : 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [
    process.env.NODE_ENV === 'production'
      ? 'dist/**/*.entity.js'
      : 'src/**/*.entity.ts',
  ],
  synchronize: false,
  migrations: [
    process.env.NODE_ENV === 'production'
      ? path.join(__dirname, './migrations/*.js')
      : path.join(__dirname, './migrations/*.ts'),
  ],
  migrationsRun: false,
});

export default AppDataSource;
