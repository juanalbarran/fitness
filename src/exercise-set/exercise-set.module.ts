import { Module } from '@nestjs/common';
import { ExerciseSetService } from './exercise-set.service';
import { ExerciseSetController } from './exercise-set.controller';

@Module({
  controllers: [ExerciseSetController],
  providers: [ExerciseSetService],
})
export class ExerciseSetModule {}
