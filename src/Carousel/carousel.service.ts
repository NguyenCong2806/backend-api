/* eslint-disable prettier/prettier */

import { Injectable, Inject } from '@nestjs/common';
import { Service } from 'src/services/Service';
import { Carousel } from './carousel.model';
import { ICarouselService } from 'src/services/carousel/ICarouselService';
import { ICarouselRepository } from 'src/repository/carousel/ICarouselRepository';


@Injectable()
export class CarouselService
  extends Service<Carousel>
  implements ICarouselService
{
  constructor(
    @Inject('ICarouselRepository')
    private readonly carousel_repository: ICarouselRepository,
  ) {
    super(carousel_repository);
  }
}
