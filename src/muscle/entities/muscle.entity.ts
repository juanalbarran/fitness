import { Exercise } from '../../exercise/entities/exercise.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum MuscleGroup {
  CHEST = 'Chest',
  BACK = 'Back',
  SHOULDERS = 'Shoulders',
  BICEPS = 'Biceps',
  TRICEPS = 'Triceps',
  FOREARMS = 'Forearms',
  CORE = 'Core',
  QUADS = 'Quads',
  HAMSTRINGS = 'Hamstrings',
  CALVES = 'Calves',
  GLUTES = 'Glutes',
  NECK = 'Neck',
  LOWER_BACK = 'Lower Back',
  ADDUCTORS = 'Adductors',
  ABDUCTORS = 'Abductors',
}

@Entity()
export class Muscle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: MuscleGroup,
  })
  group: MuscleGroup;

  @ManyToOne(() => Exercise, (exercise) => exercise.muscles)
  exercise: Exercise;
}
