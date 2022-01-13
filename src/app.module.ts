import { Module } from '@nestjs/common';
import { TelephonesModule } from './telephones/telephones.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MoneyDepositsModule } from './money-deposits/money-deposits.module';
import { PrismaService } from './prisma.service';
import { ProductsModule } from './products/products.module';

@Module({
  controllers: [],
  providers: [PrismaService],
  imports: [
    TelephonesModule,
    UsersModule,
    AuthModule,
    MoneyDepositsModule,
    ProductsModule,
  ],
})
export class AppModule {}
