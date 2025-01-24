import { Injectable } from '@nestjs/common';
import { CreateExerciseSetDto } from './dto/create-exercise-set.dto';
import { UpdateExerciseSetDto } from './dto/update-exercise-set.dto';

@Injectable()
export class ExerciseSetService {
  create(createExerciseSetDto: CreateExerciseSetDto) {
    return 'This action adds a new exerciseSet';
  }

  findAll() {
    return `This action returns all exerciseSet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exerciseSet`;
  }

  update(id: number, updateExerciseSetDto: UpdateExerciseSetDto) {
    return `This action updates a #${id} exerciseSet`;
  }

  remove(id: number) {
    return `This action removes a #${id} exerciseSet`;
  }
}
