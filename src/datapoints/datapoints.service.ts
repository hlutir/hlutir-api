import { Injectable } from '@nestjs/common';
import { Datapoint, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateDatapointDto } from './dto/create-datapoint.dto';
import { UpdateDatapointDto } from './dto/update-datapoint.dto';

@Injectable()
export class DatapointsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDatapointDto: CreateDatapointDto): Promise<Datapoint> {
    const { sensorID, timestamp, value } = createDatapointDto;

    const data: Prisma.DatapointCreateInput = {
      sensor: {
        connect: {
          sensorID
        }
      },
      timestamp,
      value
    }

    return this.prisma.datapoint.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DatapointWhereUniqueInput;
    where?: Prisma.DatapointWhereInput;
    orderBy?: Prisma.DatapointOrderByInput;
  }): Promise<Datapoint[]> {
    return this.prisma.datapoint.findMany(params);
  }

  async findOne(where: Prisma.DatapointWhereUniqueInput): Promise<Datapoint> {
    return this.prisma.datapoint.findUnique({ where });
  }

  async update(params: {
    where: Prisma.DatapointWhereUniqueInput;
    data: Prisma.DatapointUpdateInput;
  }): Promise<Datapoint> {
    return this.prisma.datapoint.update(params);
  }

  async remove(where: Prisma.DatapointWhereUniqueInput): Promise<Datapoint> {
    return this.prisma.datapoint.delete({ where });
  }
}
