import { WorkoutSession } from '../../workout-session/entities/workout-session.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

export interface SafeUser {
  id: number;
  username: string;
  email: string;
  birthday: Date;
  workouts: WorkoutSession[];
}

@Entity('user_account')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column()
  birthday: Date;

  @OneToMany(() => WorkoutSession, (workoutSession) => workoutSession.user)
  workouts: WorkoutSession[];

  toSafeUser(): SafeUser {
    return {
      id: this.id,
      username: this.username,
      email: this.email,
      birthday: this.birthday,
      workouts: this.workouts,
    } as SafeUser;
  }
}
