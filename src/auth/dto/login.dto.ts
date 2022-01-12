import { User } from '@prisma/client';
import { IsString, IsEmail } from 'class-validator';
export class LoginDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  password: string;
}

export class AuthResponse {
  @IsString()
  token: string;

  @IsString()
  user: User;
}
