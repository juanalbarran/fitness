import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: ['**/*.entity.ts'],
        synchronize: false,
        migrations: ['src/database/migrations/*-migration.ts'],
      }),
      dataSourceFactory: async (options: DataSourceOptions) => {
        const datasource = await new DataSource(options).initialize();
        return datasource;
      },
    }),
  ],
})
export class DatabaseModule {}
