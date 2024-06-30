/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { ICardRepository } from 'src/repository/card/ICardRepository';
import { Service } from 'src/services/Service';
import { Card } from './card.model';
import { ICardService } from 'src/services/card/ICard.Service';

@Injectable()
export class CardService extends Service<Card> implements ICardService {
  constructor(
    @Inject('ICardRepository')
    private readonly card_repository: ICardRepository,
  ) {
    super(card_repository);
  }
}
