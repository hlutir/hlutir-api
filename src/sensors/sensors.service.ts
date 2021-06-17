import { Injectable } from '@nestjs/common';
import { Prisma, Sensor } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';

@Injectable()
export class SensorsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSensorDto: CreateSensorDto): Promise<Sensor> {
    const { deviceID, name, unit } = createSensorDto;
    
    const data: Prisma.SensorCreateInput = {
      device: {
        connect: {
          deviceID
        }
      },
      name,
      unit
    }

    return this.prisma.sensor.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SensorWhereUniqueInput;
    where?: Prisma.SensorWhereInput;
    orderBy?: Prisma.SensorOrderByInput;
  }): Promise<Sensor[]> {
    return this.prisma.sensor.findMany(params);
  }

  async findOne(where: Prisma.SensorWhereUniqueInput): Promise<Sensor> {
    return this.prisma.sensor.findUnique({ where });
  }

  async update(params: {
    where: Prisma.SensorWhereUniqueInput;
    data: Prisma.SensorUpdateInput;
  }): Promise<Sensor> {
    return this.prisma.sensor.update(params);
  }

  async remove(where: Prisma.SensorWhereUniqueInput): Promise<Sensor> {
    return this.prisma.sensor.delete({ where });
  }
}
