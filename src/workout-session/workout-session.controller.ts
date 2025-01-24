import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkoutSessionService } from './workout-session.service';
import { CreateWorkoutSessionDto } from './dto/create-workout-session.dto';
import { UpdateWorkoutSessionDto } from './dto/update-workout-session.dto';

@Controller('workout-session')
export class WorkoutSessionController {
  constructor(private readonly workoutSessionService: WorkoutSessionService) {}

  @Post()
  create(@Body() createWorkoutSessionDto: CreateWorkoutSessionDto) {
    return this.workoutSessionService.create(createWorkoutSessionDto);
  }

  @Get()
  findAll() {
    return this.workoutSessionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workoutSessionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkoutSessionDto: UpdateWorkoutSessionDto) {
    return this.workoutSessionService.update(+id, updateWorkoutSessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workoutSessionService.remove(+id);
  }
}
