import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SubcategoriesService } from './subcategories.service';
import { SubcategoriesController } from './subcategories.controller';

@Module({
  providers: [SubcategoriesService, PrismaService],
  controllers: [SubcategoriesController],
})
export class SubcategoriesModule {}
