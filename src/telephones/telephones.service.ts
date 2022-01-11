import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, Telephone } from '@prisma/client';
import { prisma } from '../configs/db';

@Injectable()
export class TelephonesService {
  constructor(private db: PrismaService) {}

  // CRIA UM TELEFONE.

  async create(data: Prisma.TelephoneCreateInput): Promise<Telephone> {
    const telephone = await prisma.telephone.create({ data });
    return telephone;
  }

  // PROCURANDO UM TELEFONE PELO ID.

  async findOne(id: string): Promise<Telephone> {
    const telephone = await prisma.telephone.findUnique({
      where: { id },
    });

    if (!telephone) {
      throw new NotFoundException('Id não encontrado');
    }

    return telephone;
  }

  // ENCONTRA TODOS OS TELEFONES.
  // COMO É ESPERADO O RETORTO DE TODOS OS TELEFONES, É ASSINALADO NO VETOR <Telephone[]>

  async findAll(): Promise<Telephone[]> {
    const telephone = await prisma.telephone.findMany();
    return telephone;
  }

  // DELETA UM TELEFONE PELO ID.

  async deleteOne(id: string): Promise<{ message: string }> {
    await prisma.telephone.delete({
      where: { id },
    });

    return {
      message: 'Telefone deletado com sucesso',
    };
  }
}
