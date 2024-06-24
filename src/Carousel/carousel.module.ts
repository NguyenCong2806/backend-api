/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { CarouselSchema } from './carousel.model';
import { CarouselController } from './carousel.controller';
import { CarouselService } from './carousel.service';
import { CarouselRepository } from 'src/repository/carousel/CarouselRepository';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Carousel', schema: CarouselSchema }]),
    JwtModule,
  ],
  controllers: [CarouselController],
  providers: [
    CarouselService,
    { provide: 'ICarouselRepository', useClass: CarouselRepository },
  ],
  exports: [CarouselService],
})
export class CarouselModule {}