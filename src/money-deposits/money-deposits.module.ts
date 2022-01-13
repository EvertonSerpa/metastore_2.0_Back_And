import { Module } from '@nestjs/common';
import { MoneyDepositController } from './money-deposits.controller';
import { PrismaService } from 'src/prisma.service';
import { MoneyDepositService } from './money-deposits.service';

@Module({
  providers: [PrismaService, MoneyDepositService],
  controllers: [MoneyDepositController],
})
export class MoneyDepositsModule {}
