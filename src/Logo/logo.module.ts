/* eslint-disable prettier/prettier */
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { LogoRepository } from 'src/repository/logo/LogoRepository';
import { JwtModule } from '@nestjs/jwt';
import { LogoSchema } from './logo.model';
import { LogoController } from './logo.controller';
import { LogoService } from './logo.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Logo', schema: LogoSchema }]),
    JwtModule,
  ],
  controllers: [LogoController],
  providers: [
    LogoService,
    { provide: 'ILogoRepository', useClass: LogoRepository },
  ],
  exports: [LogoService],
})
export class LogoModule {}
