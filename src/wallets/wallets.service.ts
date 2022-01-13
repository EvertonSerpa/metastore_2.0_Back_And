import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, Wallets } from '@prisma/client';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Injectable()
export class WalletsService {
  constructor(private db: PrismaService) {}

  // CRIA UMA CARTEIRA.

  async create(data: Prisma.WalletsCreateInput): Promise<Wallets> {
    const wallet = await this.db.wallets.create({ data });
    return wallet;
  }

  // PROCURA UMA CARTEIRA PELO ID.

  async findOne(id: string): Promise<Wallets> {
    const wallet = await this.db.wallets.findUnique({
      where: { id },
    });

    if (!wallet) {
      throw new NotFoundException('Id não encontrado');
    }

    return wallet;
  }

  // ENCONTRA TODAS AS CARTEIRAS.

  async findAll(): Promise<Wallets[]> {
    const wallet = await this.db.wallets.findMany();
    return wallet;
  }

  async update(id: string, data: UpdateWalletDto) {
    await this.db.wallets.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Carteira atualizada com sucesso!',
    };
  }

  // DELETA UM TELEFONE PELO ID.

  async deleteOne(id: string): Promise<{ message: string }> {
    await this.db.wallets.delete({
      where: { id },
    });

    return {
      message: 'Carteira deletada com sucesso',
    };
  }
}
