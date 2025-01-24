import { ExerciseSet } from '../../exercise-set/entities/exercise-set.entity';
import { Muscle } from '../../muscle/entities/muscle.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Muscle, (muscle) => muscle.exercise)
  muscles: Muscle[];

  @ManyToOne(() => ExerciseSet, (exerciseSet) => exerciseSet.exercises)
  exerciseSet: ExerciseSet;
}
