import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { DatapointsService } from './datapoints.service';

describe('DatapointsService', () => {
  let service: DatapointsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatapointsService, PrismaService],
    }).compile();

    service = module.get<DatapointsService>(DatapointsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
