import { Injectable } from '@nestjs/common';
import { Prisma, Role, User } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const {
            createdAt,
            updatedAt,
            firstName,
            lastName,
            username,
            email,
            password,
            role
        } = createUserDto;

        let castedRole: Role;

        switch (role) {
            case "admin":
                castedRole = Role.ADMIN;
                break;

            default:
                castedRole = Role.USER;
                break;
        }

        const data: Prisma.UserCreateInput = {
            createdAt,
            updatedAt,
            firstName,
            lastName,
            username,
            email,
            passwordHash: await bcrypt.hash(password, 12),
            role: castedRole
        }

        return this.prisma.user.create({ data });
    }

    async findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByInput;
    }): Promise<User[]> {
        return this.prisma.user.findMany(params);
    }

    async findOne(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.findUnique({ where });
    }

    async update(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User> {
        return this.prisma.user.update(params);
    }

    async remove(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.delete({ where });
    }
}
