import { Test, TestingModule } from '@nestjs/testing';
import { DonutController } from './donut.controller';
import { DonutService } from './donut.service';

describe('DonutController', () => {
  let controller: DonutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonutController],
      providers: [DonutService],
    }).compile();

    controller = module.get<DonutController>(DonutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
