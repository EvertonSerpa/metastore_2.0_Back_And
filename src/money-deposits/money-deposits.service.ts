import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, Deposit_Money } from '@prisma/client';
import { UpdateMoneyDepositDto } from './dto/update-money-deposit.dto';

@Injectable()
export class MoneyDepositService {
  constructor(private db: PrismaService) {}

  // CRIA UM DEPÓSITO.

  async create(data: Prisma.Deposit_MoneyCreateInput): Promise<Deposit_Money> {
    const deposit_money = await this.db.deposit_Money.create({ data });
    return deposit_money;
  }

  // PROCURANDO UM DEPÓSITO PELO ID.

  async findOne(id: string): Promise<Deposit_Money> {
    const deposit_money = await this.db.deposit_Money.findUnique({
      where: { id },
    });

    if (!deposit_money) {
      throw new NotFoundException('Id não encontrado');
    }

    return deposit_money;
  }

  // ENCONTRA TODOS OS DEPÓSITOS.
  // COMO É ESPERADO O RETORTO DE TODOS OS DEPÓSITOS, É ASSINALADO NO VETOR <Deposit_Money[]>

  async findAll(): Promise<Deposit_Money[]> {
    const deposit_money = await this.db.deposit_Money.findMany();
    return deposit_money;
  }

  async update(id: string, data: UpdateMoneyDepositDto) {
    await this.db.deposit_Money.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Depósito atualizado com sucesso!',
    };
  }

  // DELETA UM DEPÓSITO PELO ID.

  async deleteOne(id: string): Promise<{ message: string }> {
    await this.db.deposit_Money.delete({
      where: { id },
    });

    return {
      message: 'Depósito deletado com sucesso',
    };
  }
}
