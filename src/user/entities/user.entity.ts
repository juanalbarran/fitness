import { WorkoutSession } from '../../workout-session/entities/workout-session.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('user_account')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  birthday: Date;

  @OneToMany(() => WorkoutSession, (workoutSession) => workoutSession.user)
  workouts: WorkoutSession[];
}
