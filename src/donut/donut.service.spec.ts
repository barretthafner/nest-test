import { Test, TestingModule } from '@nestjs/testing';
import { DonutService } from './donut.service';

describe('DonutService', () => {
  let service: DonutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonutService],
    }).compile();

    service = module.get<DonutService>(DonutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
