import { Module } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { PrismaService } from '../prisma.service';
import { WalletsController } from './wallets.controller';

@Module({
  providers: [WalletsService, PrismaService],
  controllers: [WalletsController],
})
export class WalletModule {}
