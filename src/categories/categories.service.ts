import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, Categories } from '@prisma/client';
import { UpdateCategorieDto } from './dto/update-categorie.dto';

@Injectable()
export class CategoriesService {
  constructor(private db: PrismaService) {}

  // CRIA UMA CATEGORIA.

  async create(data: Prisma.CategoriesCreateInput): Promise<Categories> {
    const categorie = await this.db.categories.create({ data });
    return categorie;
  }

  // PROCURANDO UMA CATEGORIA PELO ID.

  async findOne(id: string): Promise<Categories> {
    const categorie = await this.db.categories.findUnique({
      where: { id },
    });

    if (!categorie) {
      throw new NotFoundException('Id não encontrado');
    }

    return categorie;
  }

  // ENCONTRA TODOS AS CATEGORIAS.
  // COMO É ESPERADO O RETORTO DE TODOS AS CATEGORIAS, É ASSINALADO NO VETOR <Categorie>[]>

  async findAll(): Promise<Categories[]> {
    const categorie = await this.db.categories.findMany();
    return categorie;
  }

  async update(id: string, data: UpdateCategorieDto) {
    await this.db.categories.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Categoria atualizada com sucesso!',
    };
  }

  // DELETA UMA CATEGORIA PELO ID.

  async deleteOne(id: string): Promise<{ message: string }> {
    await this.db.categories.delete({
      where: { id },
    });

    return {
      message: 'Categoria deletada com sucesso',
    };
  }
}
