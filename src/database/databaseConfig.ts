import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config({ path: '.env' });

console.log({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD ? '****' : 'undefined',
  database: process.env.DATABASE_NAME,
});

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT ? +process.env.DATABASE_PORT : 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['**/*.entity.ts'],
  synchronize: false,
  migrations: ['src/database/migrations/*-migration.ts'],
  migrationsRun: false,
});

export default AppDataSource;
