import { Injectable } from '@nestjs/common';
import { DeviceType, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DeviceTypesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.DeviceTypeCreateInput): Promise<DeviceType> {
    return this.prisma.deviceType.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DeviceTypeWhereUniqueInput;
    where?: Prisma.DeviceTypeWhereInput;
    orderBy?: Prisma.DeviceTypeOrderByInput
  }): Promise<DeviceType[]> {
    return this.prisma.deviceType.findMany(params);
  }

  async findOne(where: Prisma.DeviceTypeWhereUniqueInput): Promise<DeviceType> {
    return this.prisma.deviceType.findUnique({ where });
  }

  async update(params: {
    where: Prisma.DeviceTypeWhereUniqueInput,
    data: Prisma.DeviceTypeUpdateInput
  }): Promise<DeviceType> {
    const { where, data } = params;
    return this.prisma.deviceType.update({ data, where });
  }

  async remove(where: Prisma.DeviceTypeWhereUniqueInput): Promise<DeviceType> {
    return this.prisma.deviceType.delete({ where });
  }
}
