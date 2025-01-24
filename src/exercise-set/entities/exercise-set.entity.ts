import { ExerciseSession } from '../../exercise-session/entities/exercise-session.entity';
import { Exercise } from '../../exercise/entities/exercise.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

enum ExerciseType {
  WARMING = 'Warming',
  NORMAL = 'Normal',
}

@Entity()
export class ExerciseSet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  weight: number;

  @Column()
  repetitions: number;

  @Column({
    type: 'enum',
    enum: ExerciseType,
  })
  type: ExerciseType;

  @OneToMany(() => Exercise, (exercise) => exercise.exerciseSet)
  exercises: Exercise[];

  @ManyToOne(
    () => ExerciseSession,
    (exerciseSession) => exerciseSession.exercises,
  )
  exerciseSession: ExerciseSession;
}
