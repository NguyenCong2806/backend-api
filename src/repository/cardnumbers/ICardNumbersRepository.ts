/* eslint-disable prettier/prettier */

import { CardNumbers } from 'src/CardNumbers/cardnumbers.model';
import { IRepository } from '../IRepository';

export interface ICardNumbersRepository extends IRepository<CardNumbers> {}
