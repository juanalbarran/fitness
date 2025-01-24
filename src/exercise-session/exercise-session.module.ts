import { Module } from '@nestjs/common';
import { ExerciseSessionService } from './exercise-session.service';
import { ExerciseSessionController } from './exercise-session.controller';

@Module({
  controllers: [ExerciseSessionController],
  providers: [ExerciseSessionService],
})
export class ExerciseSessionModule {}
