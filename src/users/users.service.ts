import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UserRole } from './role/role.enum';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private db: PrismaService) {}

  // CRIA O USUARIO.

  async create(data: Prisma.UserCreateInput, role: UserRole): Promise<User> {
    const userExists = await this.db.user.findUnique({
      where: { email: data.email },
    });

    // VALIDAÇÃO DE CADASTRO DO E-MAIL.

    if (userExists) {
      throw new ConflictException('Email já está cadastrado');
    }

    // CRIPTOGRAFIA DA SENHA.

    const salt = 10;
    const hashedPassaword = await bcrypt.hash(data.password, salt);

    // INCLUSÃO DA CRIPTOGRAFIA DA SENHA E ROLE NO CREATE.

    const user = await this.db.user.create({
      data: {
        ...data,
        role: role,
        password: hashedPassaword,
      },
    });

    // DELETO A SENHA ANTES DO RETORNO, A SENHA FICA SALVA NO BANCO DE DADOS CRIPTOGRAFADA.

    delete user.password;
    return user;
  }

  // PROCURANDO O USUARIO PELO ID.

  async findOne(id: string): Promise<User> {
    const user = await this.db.user.findUnique({
      where: { id },
    });

    // CASO NÃO ENCONTRE O E-MAIL RETORNO UMA MENSAGEM.

    if (!user) {
      throw new NotFoundException('Id não encontrado');
    }

    // DELETO A SENHA ANTES DO RETORNO DO USER.

    delete user.password;
    return user;
  }

  // ENCONTRO TODOS OS USUARIOS.

  // COMO É ESPERADO O RETORTO DE TODOS OS USERS, É ASSINALADO NO VETOR <User[]>

  // A6 M4 3H: 25MIN.
  async findAll() {
    const user = await this.db.user.findMany();
    // DESESTRUTURAÇÃO.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newUser = user.map(({ password, ...resto }) => resto);
    return newUser;
  }

  // ATUALIZA UM USUARIO PELO ID. (PATCH)

  async update(id: string, data: UpdateUserDto) {
    await this.db.user.update({
      where: { id },
      data,
    });

    return {
      mensage: 'Usuário atualizado com sucesso!',
    };
  }

  // DELETA UM USUARIO PELO ID.

  async deleteOne(id: string): Promise<{ message: string }> {
    await this.db.user.delete({
      where: { id },
    });

    return {
      message: 'Usuario deletado com sucesso',
    };
  }
}
