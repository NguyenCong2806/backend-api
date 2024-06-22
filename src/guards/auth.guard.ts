/* eslint-disable prettier/prettier */
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private readonly reflector: Reflector,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const authMetaData = this.reflector.getAllAndOverride<string[]>('auth', [
        context.getHandler(),
        context.getClass(),
      ]);
      if (authMetaData?.includes('skipAuthCheck')) {
        return true;
      }

      const { authorization }: any = request.headers;
      if (!authorization || authorization.trim() === '') {
        throw new UnauthorizedException('Vui lòng cung cấp mã truy cập!');
      }
      const authToken = authorization.replace(/bearer/gim, '').trim();

      const resp = await this.jwtService.verify(authToken, {
        secret: process.env.JWT_SECRET,
      });
      request.decodedData = resp;
      return true;
    } catch (error) {
      console.log('auth error - ', error.message);
      throw new ForbiddenException(
        error.message || 'session expired! Please sign In',
      );
    }
  }
}
