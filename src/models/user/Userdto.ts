/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class Userdto {
  @IsString()
  @IsNotEmpty({ message: 'Không được bỏ trống!' })
  username: string;

  @IsString()
  @IsNotEmpty({ message: 'Không được bỏ trống!' })
  @IsEmail()
  email: string;
  role: string;
  @IsString()
  @IsNotEmpty({ message: 'Không được bỏ trống!' })
  password: string;
}
