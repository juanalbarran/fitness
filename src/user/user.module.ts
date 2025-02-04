import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { IsUsernameUniqueConstraint } from './validation/is-username-unique.validator';
import { IsEmailUniqueConstraint } from './validation/is-email-unique.validator';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, IsUsernameUniqueConstraint, IsEmailUniqueConstraint],
  controllers: [UserController],
})
export class UserModule {}
