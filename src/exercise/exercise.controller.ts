import { Controller, Get } from '@nestjs/common';

@Controller('exercise')
export class ExerciseController {
  @Get()
  findAll(): string {
    return 'All the exercises';
  }
}
