import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SafeUser, User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRespository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<SafeUser> {
    let user: User = this.userRespository.create(createUserDto);
    user = await this.userRespository.save(user);
    return user.toSafeUser();
  }

  async findAll(): Promise<SafeUser[]> {
    const users: User[] = await this.userRespository.find();
    return users.map((user: User) => user.toSafeUser());
  }

  async findById(id: number): Promise<SafeUser> {
    const user: User | null = await this.userRespository.findOneBy({ id: id });
    if (!user) {
      throw new NotFoundException(`User with id: ${id} does not exists`);
    }
    return user.toSafeUser();
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.userRespository.findOne({ where: { username } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRespository.findOne({ where: { email } });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<SafeUser> {
    const user: User | null = await this.userRespository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with id: ${id} does not exists`);
    }
    Object.assign(user, updateUserDto);
    const updatedUser: User = await this.userRespository.save(user);
    return updatedUser.toSafeUser();
  }

  async delete(id: number): Promise<void> {
    const user: User | null = await this.userRespository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with id: ${id} does not exists`);
    }
    await this.userRespository.delete(id);
  }
}
