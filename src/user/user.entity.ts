import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
  bithday: Date;
}
