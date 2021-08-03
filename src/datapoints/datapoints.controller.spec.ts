import { Test, TestingModule } from '@nestjs/testing';
import { DatapointsController } from './datapoints.controller';

describe('DatapointsController', () => {
  let controller: DatapointsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatapointsController],
    }).compile();

    controller = module.get<DatapointsController>(DatapointsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
