import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { Wallets } from '@prisma/client';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { WalletsService } from './wallets.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Controller('wallet')
export class WalletsController {
  constructor(private service: WalletsService) {}

  // ROTA DE CRIAÇÃO DO CARTEIRA.

  @Post('create')
  createWallet(@Body() data: CreateWalletDto): Promise<Wallets> {
    return this.service.create(data);
  }

  // ROTA, ENCONTRA UMA CARTEIRA PELO ID.

  @Get('find/:id')
  findOne(@Param('id') id: string): Promise<Wallets> {
    return this.service.findOne(id);
  }

  // ROTA, ENCONTRA TODOS OS CARTEIRAS.

  @Get('find-all')
  findAll(): Promise<Wallets[]> {
    return this.service.findAll();
  }

  // ROTA, QUE ATUALIZA UMA CARTEIRA PELO ID (PATCH).

  @Patch('patch/:id')
  update(@Param('id') id: string, @Body() UpdateWalletDto: UpdateWalletDto) {
    return this.service.update(id, UpdateWalletDto);
  }

  // ROTA, QUE DELETA UMA CARTEIRA PELO ID.

  @Delete('delete/:id')
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
}
