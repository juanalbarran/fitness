import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { SafeUser } from './entities/user.entity';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(@Inject(UserService) private userService: UserService) {}
  @Get()
  async findAll(): Promise<SafeUser[]> {
    return await this.userService.findAll();
  }
  @Get(':id')
  async findById(@Param('id') id: number): Promise<SafeUser> {
    return await this.userService.findById(id);
  }
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<SafeUser> {
    console.log(createUserDto);
    return await this.userService.create(createUserDto);
  }
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<SafeUser> {
    return await this.userService.update(id, updateUserDto);
  }
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.userService.delete(id);
  }
}
