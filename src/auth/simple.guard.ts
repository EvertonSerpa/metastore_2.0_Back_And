import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

//A8 M4 3H 00MIN
@Injectable()
export class SimpleGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request = context.switchToHttp().getRequest();

    // CAPTURAMOS O AUTHORIZATION E JOGAMOS ELE DENTRO DO TOKEN.
    const token = req.headers['authorization'];

    if (!token) {
      throw new UnauthorizedException('Token não encontrado');
    }

    if (token !== 'MEU_TOKEN') {
      throw new UnauthorizedException('Token não encontrado');
    }

    return true;
  }
}
