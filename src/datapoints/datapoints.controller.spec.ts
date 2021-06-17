import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { DatapointsController } from './datapoints.controller';
import { DatapointsService } from './datapoints.service';

describe('DatapointsController', () => {
  let controller: DatapointsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatapointsController],
      providers: [DatapointsService, PrismaService],
    }).compile();

    controller = module.get<DatapointsController>(DatapointsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
