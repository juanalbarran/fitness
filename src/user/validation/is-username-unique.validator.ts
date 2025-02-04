import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidatorOptions,
} from 'class-validator';
import { User } from '../entities/user.entity';
import { UserService } from '../user.service';
@Injectable()
@ValidatorConstraint({ name: 'IsUsernameUnique', async: true })
export class IsUsernameUniqueConstraint
  implements ValidatorConstraintInterface
{
  constructor(private readonly userService: UserService) {}

  async validate(username: string): Promise<boolean> {
    const user: User | null = await this.userService.findByUsername(username);
    return user === null;
  }
  defaultMessage(): string {
    return 'This username already exists.';
  }
}

export function IsUsernameUnique(validationOptions?: ValidatorOptions) {
  return function (object: NonNullable<unknown>, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUsernameUniqueConstraint,
    });
  };
}
