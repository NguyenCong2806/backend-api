/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { IAdvertisementRespository } from 'src/repository/advertisement/IAdvertisementRepository';
import { Service } from 'src/services/Service';
import { Advertisement } from './advertisement.model';
import { IAdvertisementService } from 'src/services/advertisement/IAdvertisement.Service';
@Injectable()
export class AdvertisementService
  extends Service<Advertisement>
  implements IAdvertisementService
{
  constructor(
    @Inject('IAdvertisementRepository')
    private readonly advertisement_repository: IAdvertisementRespository,
  ) {
    super(advertisement_repository);
  }
}
