import { IsString } from 'class-validator';

export class CreateSubcategorieDto {
  @IsString()
  nome_subcategory: string;

  @IsString()
  description: string;
}
