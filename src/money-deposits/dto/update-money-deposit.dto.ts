import { PartialType } from '@nestjs/mapped-types';
import { CreateMoneyDepositDto } from './create-money-deposit.dto';

export class UpdateMoneyDepositDto extends PartialType(CreateMoneyDepositDto) {}
