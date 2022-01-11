import { IsString } from 'class-validator';

export class CreateTelephoneDto {
  @IsString()
  phone_number: string;

  @IsString()
  country_code: string;

  @IsString()
  region_code: string;

  @IsString()
  userId: string;
}
