import { Module } from '@nestjs/common';
import { TelephonesService } from './telephones.service';
import { PrismaService } from 'src/prisma.service';
import { TelephonesController } from './telephones.controller';

@Module({
  providers: [TelephonesService, PrismaService],
  controllers: [TelephonesController],
})
export class TelephonesModule {}
