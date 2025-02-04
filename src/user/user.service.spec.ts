import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { SafeUser, User } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';

export class MockUser extends User {
  constructor() {
    super();
    this.id = 1;
    this.username = 'test.user';
    this.password = '1234';
    this.email = 'text@email.com';
    this.birthday = new Date();
    this.workouts = [];
  }
  toSafeUser(): SafeUser {
    return {
      id: this.id,
      username: this.username,
      email: this.email,
      birthday: this.birthday,
      workouts: this.workouts,
    };
  }
}

describe('UserService', () => {
  let service: UserService;

  const mockUser = new MockUser();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            create: jest.fn((dto: CreateUserDto) =>
              Object.assign(new MockUser(), dto),
            ),
            save: jest.fn().mockResolvedValue(mockUser),
            find: jest.fn().mockResolvedValue([mockUser]),
            findOneBy: jest.fn().mockResolvedValue(mockUser),
            delete: jest.fn().mockResolvedValue({ affected: 1 }),
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('create', () => {
    it('should create an user', async () => {
      const createUserDto: CreateUserDto = {
        username: 'test.user',
        password: '1234',
        email: 'text@email.com',
        birthday: new Date(),
      };
      const result = await service.create(createUserDto);
      expect(result).toEqual(mockUser.toSafeUser());
    });
  });
});
