import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { Deposit_Money } from '@prisma/client';
import { CreateMoneyDepositDto } from './dto/create-money-deposit.dto';
import { MoneyDepositService } from './money-deposits.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UpdateMoneyDepositDto } from './dto/update-money-deposit.dto';

@Controller('money-deposit')
export class MoneyDepositController {
  constructor(private service: MoneyDepositService) {}

  // ROTA DE CRIAÇÃO DO DEPÓSITO.

  @Post('create')
  createTelephone(@Body() data: CreateMoneyDepositDto): Promise<Deposit_Money> {
    return this.service.create(data);
  }

  // ROTA, ENCONTRA UM DEPÓSITO PELO ID.

  @Get('find/:id')
  findOne(@Param('id') id: string): Promise<Deposit_Money> {
    return this.service.findOne(id);
  }

  // ROTA, ENCONTRA TODOS OS DEPÓSITOS.

  @Get('find-all')
  findAll(): Promise<Deposit_Money[]> {
    return this.service.findAll();
  }

  // ROTA, QUE ATUALIZA UM DEPÓSITO PELO ID (PATCH).

  @Patch('patch/:id')
  update(
    @Param('id') id: string,
    @Body() UpdateTelephoneDto: UpdateMoneyDepositDto,
  ) {
    return this.service.update(id, UpdateTelephoneDto);
  }

  // ROTA, QUE DELETA UM DEPÓSITO PELO ID.

  @Delete('delete/:id')
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
}
