import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello!"', () => {
      expect(appController.getHello()).toBe('Hello!');
    });
  });

  describe('health', () => {
    it('should return "I\'m healthy!"', () => {
      expect(appController.getHealth()).toBe("I'm healthy!");
    });
  });
});
