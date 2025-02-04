import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsNotEmpty, Length } from 'class-validator';
import { IsUsernameUnique } from '../validation/is-username-unique.validator';
import { IsEmailUnique } from '../validation/is-email-unique.validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsUsernameUnique()
  public readonly username: string;

  @IsNotEmpty()
  @Length(6, 50)
  public readonly password: string;

  @IsEmail()
  @IsEmailUnique()
  @IsNotEmpty()
  public readonly email: string;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  public readonly birthday: Date;
}
