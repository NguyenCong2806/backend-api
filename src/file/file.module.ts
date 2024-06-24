/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { FileController } from './file.controller';
@Module({
  imports: [ConfigModule.forRoot(), JwtModule],
  controllers: [FileController],
})
export class FileModule {}
