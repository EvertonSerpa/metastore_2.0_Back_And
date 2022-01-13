import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, Products } from '@prisma/client';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private db: PrismaService) {}

  // CRIA UM PRODUTO.

  async create(data: Prisma.ProductsCreateInput): Promise<Products> {
    const product = await this.db.products.create({ data });
    return product;
  }

  // PROCURANDO UM PRODUTO PELO ID.

  async findOne(id: string): Promise<Products> {
    const product = await this.db.products.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException('Id não encontrado');
    }

    return product;
  }

  // ENCONTRA TODOS OS PRODUTOS.
  // COMO É ESPERADO O RETORTO DE TODOS OS PRODUTOS, É ASSINALADO NO VETOR <Products>[]>

  async findAll(): Promise<Products[]> {
    const product = await this.db.products.findMany();
    return product;
  }

  async update(id: string, data: UpdateProductDto) {
    await this.db.products.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Produto atualizado com sucesso!',
    };
  }

  // DELETA UM PRODUTO PELO ID.

  async deleteOne(id: string): Promise<{ message: string }> {
    await this.db.products.delete({
      where: { id },
    });

    return {
      message: 'Produto deletado com sucesso',
    };
  }
}
