import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { Products } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private service: ProductsService) {}

  // ROTA DE CRIAÇÃO DO PRODUTO.

  @Post('create')
  createProduct(@Body() data: CreateProductDto): Promise<Products> {
    return this.service.create(data);
  }

  // ROTA, ENCONTRA UM PRODUTO PELO ID.

  @Get('find/:id')
  findOne(@Param('id') id: string): Promise<Products> {
    return this.service.findOne(id);
  }

  // ROTA, ENCONTRA TODOS OS PRODUTOS.

  @Get('find-all')
  findAll(): Promise<Products[]> {
    return this.service.findAll();
  }

  // ROTA, QUE ATUALIZA UM TELEFONE PELO ID (PATCH).

  @Patch('patch/:id')
  update(@Param('id') id: string, @Body() UpdateProductDto: UpdateProductDto) {
    return this.service.update(id, UpdateProductDto);
  }

  // ROTA, QUE DELETA UM TELEFONE PELO ID.

  @Delete('delete/:id')
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
}
