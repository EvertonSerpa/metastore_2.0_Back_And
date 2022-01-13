import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { Subcategories } from '@prisma/client';
import { CreateSubcategorieDto } from './dto/create-subcategorie.dto';
import { SubcategoriesService } from './subcategories.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UpdateSubcategorieDto } from './dto/update-subcategorie.dto';

@Controller('subcategorie')
export class SubcategoriesController {
  constructor(private service: SubcategoriesService) {}

  // ROTA DE CRIAÇÃO DA SUBCATEGORIA.

  @Post('create')
  createSubcategorie(
    @Body() data: CreateSubcategorieDto,
  ): Promise<Subcategories> {
    return this.service.create(data);
  }

  // ROTA, ENCONTRA UMA SUBCATEGORIA PELO ID.

  @Get('find/:id')
  findOne(@Param('id') id: string): Promise<Subcategories> {
    return this.service.findOne(id);
  }

  // ROTA, ENCONTRA TODOS AS SUBCATEGORIES.

  @Get('find-all')
  findAll(): Promise<Subcategories[]> {
    return this.service.findAll();
  }

  // ROTA, QUE ATUALIZA UMA SUBCATEGORIA PELO ID (PATCH).

  @Patch('patch/:id')
  update(
    @Param('id') id: string,
    @Body() UpdateSubcategorieDto: UpdateSubcategorieDto,
  ) {
    return this.service.update(id, UpdateSubcategorieDto);
  }

  // ROTA, QUE DELETA UM TELEFONE PELO ID.

  @Delete('delete/:id')
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
}
