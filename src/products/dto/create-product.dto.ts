import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name_product: string;

  @IsNumber()
  price: number;

  @IsString()
  description: string;
}
