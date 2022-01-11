import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      // SEGREDO DA APLICAÇÃO.
      secret: 'r&n&q&*Ne&lfZ5^yEH2!%U6oUbDmUOchUr7tgdXVcGdg!9Xz9q',
      // DEFINE A QUANTIDADE DE TEMPO QUE O TOKEN VALE.
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [PrismaService, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
