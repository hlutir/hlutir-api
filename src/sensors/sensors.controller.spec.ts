import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { SensorsController } from './sensors.controller';
import { SensorsService } from './sensors.service';

describe('SensorsController', () => {
  let controller: SensorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SensorsController],
      providers: [SensorsService, PrismaService],
    }).compile();

    controller = module.get<SensorsController>(SensorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
