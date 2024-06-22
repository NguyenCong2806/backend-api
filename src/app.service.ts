/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      connect: 'Success',
      code: 200,
      status: true,
    };
  }
}
