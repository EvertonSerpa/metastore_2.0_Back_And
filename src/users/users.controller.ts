import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Delete,
  UnprocessableEntityException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UserRole } from './role/role.enum';

@Controller()
export class UsersController {
  constructor(private service: UsersService) {}

  // ROTA DE CRIAÇÃO DO USUARIO.

  @Post('create-user')
  createUser(@Body() data: CreateUserDto): Promise<User> {
    delete data.passawordConfirmation;
    return this.service.create(data, UserRole.USER);
  }

  // ROTA DE CRIAÇÃO DO ADMINISTRADOR.

  @Post('create-admin')
  createAdmin(@Body() data: CreateUserDto): Promise<User> {
    delete data.passawordConfirmation;
    return this.service.create(data, UserRole.ADMIN);
  }

  // ROTA, ENCONTRE UM USUARIO PELO ID.

  @Get('find/:id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.service.findOne(id);
  }

  // ROTA, ENCONTRE TODOS OS USUARIOS.

  @Get('find-all')
  findAll() {
    return this.service.findAll();
  }

  // ROTA, QUE DELETA UM USUARIO PELO ID.

  @Delete('delete/:id')
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
}
