import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ICreateUserDto, IUpdateUserDto, IUser, UsersService } from '@hlutir/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: ICreateUserDto): Promise<IUser> {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<IUser[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IUser> {
    return await this.usersService.findOne(Number(id));
  }

  @Get('/u/:username')
  async findOneByUsername(@Param('username') username: string): Promise<IUser> {
    return await this.usersService.findOneByUsername(username);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: IUpdateUserDto): Promise<IUser> {
    return await this.usersService.update(Number(id), data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<IUser> {
    return await this.usersService.remove(Number(id));
  }
}
