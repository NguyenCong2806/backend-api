/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common'
import { Service } from 'src/services/Service';
import { CardNumbers } from './cardnumbers.model';
import { ICardNumbersService } from 'src/services/cardnumbers/ICardNumbers.Service';
import { ICardNumbersRepository } from 'src/repository/cardnumbers/ICardNumbersRepository';

@Injectable()
export class CardNumbersService extends Service<CardNumbers> implements ICardNumbersService {
  constructor(
    @Inject('ICardNumbersRepository')
    private readonly cardnumbers_repository: ICardNumbersRepository,
  ) {
    super(cardnumbers_repository);
  }
}
