import { Injectable } from '@nestjs/common';
import { CreateExerciseSessionDto } from './dto/create-exercise-session.dto';
import { UpdateExerciseSessionDto } from './dto/update-exercise-session.dto';

@Injectable()
export class ExerciseSessionService {
  create(createExerciseSessionDto: CreateExerciseSessionDto) {
    return 'This action adds a new exerciseSession';
  }

  findAll() {
    return `This action returns all exerciseSession`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exerciseSession`;
  }

  update(id: number, updateExerciseSessionDto: UpdateExerciseSessionDto) {
    return `This action updates a #${id} exerciseSession`;
  }

  remove(id: number) {
    return `This action removes a #${id} exerciseSession`;
  }
}
