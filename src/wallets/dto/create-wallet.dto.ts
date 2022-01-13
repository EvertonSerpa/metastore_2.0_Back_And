import { IsString, IsNumber } from 'class-validator';

export class CreateWalletDto {
  @IsNumber()
  balance: number;

  @IsString()
  userId: string;
}
