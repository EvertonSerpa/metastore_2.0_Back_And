import { PartialType } from '@nestjs/mapped-types';
import { CreateSubcategorieDto } from './create-subcategorie.dto';

export class UpdateSubcategorieDto extends PartialType(CreateSubcategorieDto) {}
