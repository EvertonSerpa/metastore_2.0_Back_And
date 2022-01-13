import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Informe um nome válido' })
  name: string;

  @IsString({ message: 'Informe um nick name' })
  nick_name: string;

  @IsString()
  @IsEmail({ message: 'Informe um email válido' })
  email: string;

  @IsString({ message: 'Informe uma senha válida' })
  @Length(8, 50, { message: 'Informe uma senha entre 8 e 50 caracteres' })
  password: string;
}
