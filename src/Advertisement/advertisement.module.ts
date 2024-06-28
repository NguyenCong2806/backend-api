/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { AdvertisementSchema } from './advertisement.model';
import { AdvertisementController } from './advertisement.controller';
import { AdvertisementService } from './advertisement.service';
import { AdvertisementRepository } from 'src/repository/advertisement/AdvertisementRepository';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Advertisement', schema: AdvertisementSchema },
    ]),
    JwtModule,
  ],
  controllers: [AdvertisementController],
  providers: [
    AdvertisementService,
    {
      provide: 'IAdvertisementRepository',
      useClass: AdvertisementRepository,
    },
  ],
  exports: [AdvertisementService],
})
export class AdvertisementModule {}
