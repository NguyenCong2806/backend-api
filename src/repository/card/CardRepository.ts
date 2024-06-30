/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from '../Repository';
import { Card } from 'src/Card/card.model';
import { ICardRepository } from './ICardRepository';

@Injectable()
export class CardRepository
  extends Repository<Card>
  implements ICardRepository
{
  constructor(
    @InjectModel(Card.name)
    private readonly card_repository: Model<Card>,
  ) {
    super(card_repository);
  }
}
