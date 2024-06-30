/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { BoxImageTextSchema } from './boximagetext.model';
import { BoxImageTextController } from './boximagetext.controller';
import { BoximagetextService } from './boximagetext.service';
import { BoximagetextRespository } from 'src/repository/boximagetext/BoxImageTextRepository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'BoxImageText', schema: BoxImageTextSchema },
    ]),
    JwtModule,
  ],
  controllers: [BoxImageTextController],
  providers: [
    BoximagetextService,
    {
      provide: 'IBoximagetextRepository',
      useClass: BoximagetextRespository,
    },
  ],
  exports: [BoximagetextService],
})
export class BoxImageTextModule {}
