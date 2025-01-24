import { PartialType } from '@nestjs/mapped-types';
import { CreateExerciseSessionDto } from './create-exercise-session.dto';

export class UpdateExerciseSessionDto extends PartialType(CreateExerciseSessionDto) {}
