/* eslint-disable prettier/prettier */
import { BoxImageTextRepository } from 'src/repository/boximagetext/BoxImageTextRepository';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { BoxImageTextSchema } from './boximagetext.model';
import { BoxImageTextController } from './boximagetext.controller';
import { BoximagetextService } from './boximagetext.service';
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
      provide: 'IBoxImageTextRepository',
      useClass: BoxImageTextRepository,
    },
  ],
  exports: [BoximagetextService],
})
export class BoxImageTextModule {}
