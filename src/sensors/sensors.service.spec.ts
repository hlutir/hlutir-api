import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { SensorsService } from './sensors.service';

describe('SensorsService', () => {
  let service: SensorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SensorsService, PrismaService],
    }).compile();

    service = module.get<SensorsService>(SensorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
