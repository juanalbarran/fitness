import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseSessionController } from './exercise-session.controller';
import { ExerciseSessionService } from './exercise-session.service';

describe('ExerciseSessionController', () => {
  let controller: ExerciseSessionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExerciseSessionController],
      providers: [ExerciseSessionService],
    }).compile();

    controller = module.get<ExerciseSessionController>(ExerciseSessionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
