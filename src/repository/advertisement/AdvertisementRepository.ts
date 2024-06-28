/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from '../Repository';
import { Advertisement } from 'src/Advertisement/advertisement.model';
import { IAdvertisementRespository } from './IAdvertisementRepository';

@Injectable()
export class AdvertisementRepository
  extends Repository<Advertisement>
  implements IAdvertisementRespository
{
  constructor(
    @InjectModel(Advertisement.name)
    private readonly advertisement_repository: Model<Advertisement>,
  ) {
    super(advertisement_repository);
  }
}
