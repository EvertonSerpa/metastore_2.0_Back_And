import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, Subcategories } from '@prisma/client';
import { UpdateSubcategorieDto } from './dto/update-subcategorie.dto';

@Injectable()
export class SubcategoriesService {
  constructor(private db: PrismaService) {}

  // CRIA UMA SUBCATEGORIA.

  async create(data: Prisma.SubcategoriesCreateInput): Promise<Subcategories> {
    const subcategorie = await this.db.subcategories.create({ data });
    return subcategorie;
  }

  // PROCURANDO UMA SUBCATEGORIA PELO ID.

  async findOne(id: string): Promise<Subcategories> {
    const subcategorie = await this.db.subcategories.findUnique({
      where: { id },
    });

    if (!subcategorie) {
      throw new NotFoundException('Id não encontrado');
    }

    return subcategorie;
  }

  // ENCONTRA TODOS OS SUBCATEGORIAS.

  async findAll(): Promise<Subcategories[]> {
    const subcategorie = await this.db.subcategories.findMany();
    return subcategorie;
  }

  async update(id: string, data: UpdateSubcategorieDto) {
    await this.db.subcategories.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Subcategoria atualizada com sucesso!',
    };
  }

  // DELETA UMA  SUBCATEGORIA PELO ID.

  async deleteOne(id: string): Promise<{ message: string }> {
    await this.db.subcategories.delete({
      where: { id },
    });

    return {
      message: 'Subcategoria deletada com sucesso',
    };
  }
}
