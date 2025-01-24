import { ExerciseSet } from '../../exercise-set/entities/exercise-set.entity';
import { WorkoutSession } from '../../workout-session/entities/workout-session.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ExerciseSession {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  restingTime: Date;

  @OneToMany(() => ExerciseSet, (exerciseSet) => exerciseSet.exerciseSession)
  exercises: ExerciseSet[];

  @ManyToOne(() => WorkoutSession, (workoutSession) => workoutSession.exercises)
  workout: WorkoutSession;
}
