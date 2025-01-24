import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExerciseSetService } from './exercise-set.service';
import { CreateExerciseSetDto } from './dto/create-exercise-set.dto';
import { UpdateExerciseSetDto } from './dto/update-exercise-set.dto';

@Controller('exercise-set')
export class ExerciseSetController {
  constructor(private readonly exerciseSetService: ExerciseSetService) {}

  @Post()
  create(@Body() createExerciseSetDto: CreateExerciseSetDto) {
    return this.exerciseSetService.create(createExerciseSetDto);
  }

  @Get()
  findAll() {
    return this.exerciseSetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciseSetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExerciseSetDto: UpdateExerciseSetDto) {
    return this.exerciseSetService.update(+id, updateExerciseSetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciseSetService.remove(+id);
  }
}
