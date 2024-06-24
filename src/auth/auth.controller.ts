/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpStatus, Post,Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Userlogin } from 'src/models/user/Userlogin';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  async signIn(@Body() signInDto: Userlogin, @Res() res: Response){
    const respo = await this.authService.signIn(signInDto);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('logout')
  logout() {
    this.authService.logout();
  }
}
