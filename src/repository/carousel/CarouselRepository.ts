/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ICarouselRepository } from './ICarouselRepository';
import { Repository } from '../Repository';
import { Carousel } from 'src/Carousel/carousel.model';

@Injectable()
export class CarouselRepository
  extends Repository<Carousel>
  implements ICarouselRepository
{
  constructor(
    @InjectModel(Carousel.name)
    private readonly carousel_repository: Model<Carousel>,
  ) {
    super(carousel_repository);
  }
}
