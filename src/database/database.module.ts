import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseSession } from '../exercise-session/entities/exercise-session.entity';
import { ExerciseSet } from '../exercise-set/entities/exercise-set.entity';
import { Exercise } from '../exercise/entities/exercise.entity';
import { Muscle } from '../muscle/entities/muscle.entity';
import { User } from '../user/entities/user.entity';
import { WorkoutSession } from '../workout-session/entities/workout-session.entity';
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
        logging: configService.get<boolean>('DATABASE_LOGGING'),
        entities: [
          User,
          Exercise,
          ExerciseSession,
          ExerciseSet,
          Muscle,
          WorkoutSession,
        ],
        synchronize: false,
      }),
      dataSourceFactory: async (options: DataSourceOptions) => {
        const datasource = await new DataSource(options).initialize();
        return datasource;
      },
    }),
  ],
})
export class DatabaseModule {}
