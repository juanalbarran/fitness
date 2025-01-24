import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExerciseSessionService } from './exercise-session.service';
import { CreateExerciseSessionDto } from './dto/create-exercise-session.dto';
import { UpdateExerciseSessionDto } from './dto/update-exercise-session.dto';

@Controller('exercise-session')
export class ExerciseSessionController {
  constructor(private readonly exerciseSessionService: ExerciseSessionService) {}

  @Post()
  create(@Body() createExerciseSessionDto: CreateExerciseSessionDto) {
    return this.exerciseSessionService.create(createExerciseSessionDto);
  }

  @Get()
  findAll() {
    return this.exerciseSessionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciseSessionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExerciseSessionDto: UpdateExerciseSessionDto) {
    return this.exerciseSessionService.update(+id, updateExerciseSessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciseSessionService.remove(+id);
  }
}
