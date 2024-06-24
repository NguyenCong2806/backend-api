/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { Userlogin } from 'src/models/user/Userlogin';
import { AuthVm } from 'src/models/Auth/AuthVm';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async signIn(data: Userlogin): Promise<AuthVm> {
    const res = new AuthVm();
    // Check if user exists
    const filter = { username: data.username };
    const user = await this.usersService.findOneValue(filter);
    //Account does not exist!
    if (!user.item){
        return res;
    };
    const passwordMatches = await argon2.verify(
      user.item.password,
      data.password,
    );
    if (!passwordMatches){
        res.statuscode = 412;
        res.message = "Sai mật khẩu!";
        return res;
    };
    const payload = {
      userId: user.item.email,
      username: user.item.username,
      role: user.item.role,
    };

    res.message = 'Đăng nhập thành công';
    res.role = user.item.role;
    res.status = true;
    res.statuscode = 200;
    res.userid = user.item._id.toString();
    res.username = user.item.username;
    res.accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRE,
    });
    res.refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET_REFRESH,
      expiresIn: process.env.JWT_EXPIRE_REFRESH,
    });
    return res;
  }

  async logout() {}

  hashData(data: string) {
    return argon2.hash(data);
  }
}
