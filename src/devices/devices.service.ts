import { Injectable } from '@nestjs/common';
import { Device, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

@Injectable()
export class DevicesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDeviceDto: CreateDeviceDto): Promise<Device> {
    const { name, description, identifier, deviceTypeID } = createDeviceDto;
    
    const data: Prisma.DeviceCreateInput = {
      name,
      description,
      identifier,
      deviceType: {
        connect: {
          deviceTypeID
        }
      }
    }

    return this.prisma.device.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DeviceWhereUniqueInput;
    where?: Prisma.DeviceWhereInput;
    orderBy?: Prisma.DeviceOrderByInput
  }): Promise<Device[]> {
    return this.prisma.device.findMany(params);
  }

  async findOne(where: Prisma.DeviceWhereUniqueInput): Promise<Device> {
    return this.prisma.device.findUnique({ where });
  }

  async update(params: {
    where: Prisma.DeviceWhereUniqueInput;
    data: Prisma.DeviceUpdateInput;
  }): Promise<Device> {
    return this.prisma.device.update(params);
  }

  async remove(where: Prisma.DeviceWhereUniqueInput): Promise<Device> {
    return this.prisma.device.delete({ where });
  }
}
