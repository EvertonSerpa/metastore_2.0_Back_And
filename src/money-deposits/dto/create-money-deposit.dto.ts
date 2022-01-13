import { IsNumber, IsString } from 'class-validator';

export class CreateMoneyDepositDto {
  @IsNumber()
  value: number;

  @IsString()
  userId: string;
}
