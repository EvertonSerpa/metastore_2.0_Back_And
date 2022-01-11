import { Body, Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { Telephone } from '@prisma/client';
import { CreateTelephoneDto } from './dto/create-telephone.dto';
import { TelephonesService } from './telephones.service';

@Controller('telephones')
export class TelephonesController {
  constructor(private service: TelephonesService) {}

  // ROTA DE CRIAÇÃO DO TELEFONE.

  @Post('create')
  createTelephone(@Body() data: CreateTelephoneDto): Promise<Telephone> {
    return this.service.create(data);
  }

  // ROTA, ENCONTRA UM TELEFONE PELO ID.

  @Get('find/:id')
  findOne(@Param('id') id: string): Promise<Telephone> {
    return this.service.findOne(id);
  }

  // ROTA, ENCONTRA TODOS OS TELEFONES.

  @Get('find-all')
  findAll(): Promise<Telephone[]> {
    return this.service.findAll();
  }

  // ROTA, QUE DELETA UM TELEFONE PELO ID.

  @Delete('delete/:id')
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
}
