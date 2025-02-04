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
@ValidatorConstraint({ name: 'IsEmailUnique', async: true })
export class IsEmailUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate(username: string): Promise<boolean> {
    const user: User | null = await this.userService.findByEmail(username);
    return user === null;
  }
  defaultMessage(): string {
    return 'This email already exists.';
  }
}

export function IsEmailUnique(validationOptions?: ValidatorOptions) {
  return function (object: NonNullable<unknown>, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailUniqueConstraint,
    });
  };
}
