import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './config/configuration.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { MuscleModule } from './muscle/muscle.module';
import { ExerciseModule } from './exercise/exercise.module';
import { WorkoutSessionModule } from './workout-session/workout-session.module';
import { ExerciseSessionModule } from './exercise-session/exercise-session.module';
import { ExerciseSetModule } from './exercise-set/exercise-set.module';

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    UserModule,
    MuscleModule,
    ExerciseModule,
    WorkoutSessionModule,
    ExerciseSessionModule,
    ExerciseSetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
