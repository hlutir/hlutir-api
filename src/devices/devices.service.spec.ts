import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { DevicesService } from './devices.service';

describe('DevicesService', () => {
  let module: TestingModule;
  let service: DevicesService;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [DevicesService, PrismaService],
    }).compile();

    service = module.get<DevicesService>(DevicesService);
  });

  afterEach(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find a device', async () => {
    expect(await service.findOne({ deviceID: 1 })).toBeInstanceOf(Object);
  });

  it('should not find a device', async () => {
    expect(await service.findOne({ deviceID: 0 })).toBeNull();
  });

  it('should find multiple devices', async () => {
    expect((await service.findAll({})).length).toBeGreaterThan(1);
  });

  it('should find no devices', async () => {
    expect((await service.findAll({ where: { deviceID: 0 } })).length).toBe(0);
  });

  it('should find one device', async () => {
    expect((await service.findAll({ where: { deviceID: 1 } })).length).toBe(1);
  });
});
