import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { Telephone } from '@prisma/client';
import { CreateTelephoneDto } from './dto/create-telephone.dto';
import { TelephonesService } from './telephones.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UpdateTelephoneDto } from './dto/update-telephone.dto';

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

  // ROTA, QUE ATUALIZA UM TELEFONE PELO ID (PATCH).

  @Patch('patch/:id')
  update(
    @Param('id') id: string,
    @Body() UpdateTelephoneDto: UpdateTelephoneDto,
  ) {
    return this.service.update(id, UpdateTelephoneDto);
  }

  // ROTA, QUE DELETA UM TELEFONE PELO ID.

  @Delete('delete/:id')
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
}
