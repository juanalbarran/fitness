import { ExerciseSession } from '../../exercise-session/entities/exercise-session.entity';
import { User } from '../../user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class WorkoutSession {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  personalWeight: number;

  @Column()
  workoutDate: Date;

  @OneToMany(
    () => ExerciseSession,
    (exerciseSession) => exerciseSession.workout,
  )
  exercises: ExerciseSession[];

  @ManyToOne(() => User, (user) => user.workouts)
  user: User;
}
