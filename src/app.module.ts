import { Module } from '@nestjs/common';
import { TelephonesModule } from './telephones/telephones.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [],
  providers: [],
  imports: [TelephonesModule, UsersModule, AuthModule],
})
export class AppModule {}
