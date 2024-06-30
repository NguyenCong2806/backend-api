/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICardNumbersRepository } from './ICardNumbersRepository';
import { Repository } from '../Repository';
import { CardNumbers } from 'src/CardNumbers/cardnumbers.model';

@Injectable()
export class CardNumbersRepository
  extends Repository<CardNumbers>
  implements ICardNumbersRepository
{
  constructor(
    @InjectModel(CardNumbers.name)
    private readonly cardnumbers_repository: Model<CardNumbers>,
  ) {
    super(cardnumbers_repository);
  }
}
