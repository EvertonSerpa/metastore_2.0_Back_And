import { IsString } from 'class-validator';

export class CreateCategorieDto {
  @IsString()
  name_category: string;

  @IsString()
  description: string;
}
