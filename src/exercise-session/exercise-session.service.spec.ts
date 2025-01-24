import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseSessionService } from './exercise-session.service';

describe('ExerciseSessionService', () => {
  let service: ExerciseSessionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciseSessionService],
    }).compile();

    service = module.get<ExerciseSessionService>(ExerciseSessionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
