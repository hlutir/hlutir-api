import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ICreateUserDto, IUpdateUserDto, IUser, UsersService } from '@hlutir/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: ICreateUserDto): Promise<IUser> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<IUser[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<IUser> {
    return this.usersService.findOne(Number(id));
  }

  @Get('/u/:username')
  findOneByUsername(@Param('username') username: string): Promise<IUser> {
    return this.usersService.findOneByUsername(username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: IUpdateUserDto): Promise<IUser> {
    return this.usersService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<IUser> {
    return this.usersService.remove(Number(id));
  }
}
