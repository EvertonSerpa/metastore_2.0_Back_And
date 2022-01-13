import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { Categories } from '@prisma/client';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { CategoriesService } from './categories.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UpdateCategorieDto } from './dto/update-categorie.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private service: CategoriesService) {}

  // ROTA DE CRIAÇÃO DO PRODUTO.

  @Post('create')
  createProduct(@Body() data: CreateCategorieDto): Promise<Categories> {
    return this.service.create(data);
  }

  // ROTA, ENCONTRA UMA CATEGORIA PELO ID.

  @Get('find/:id')
  findOne(@Param('id') id: string): Promise<Categories> {
    return this.service.findOne(id);
  }

  // ROTA, ENCONTRA TODOS AS CATEGORIAS.

  @Get('find-all')
  findAll(): Promise<Categories[]> {
    return this.service.findAll();
  }

  // ROTA, QUE ATUALIZA UMA CATEGORIA PELO ID (PATCH).

  @Patch('patch/:id')
  update(
    @Param('id') id: string,
    @Body() UpdateCategorieDto: UpdateCategorieDto,
  ) {
    return this.service.update(id, UpdateCategorieDto);
  }

  // ROTA, QUE DELETA UMA CATEGORIA PELO ID.

  @Delete('delete/:id')
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
}
