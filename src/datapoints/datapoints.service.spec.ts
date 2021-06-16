import { Test, TestingModule } from '@nestjs/testing';
import { DatapointsService } from './datapoints.service';

describe('DatapointsService', () => {
  let service: DatapointsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatapointsService],
    }).compile();

    service = module.get<DatapointsService>(DatapointsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
