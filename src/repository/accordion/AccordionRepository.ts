/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from '../Repository';
import { Accordion } from 'src/Accordion/accordion.model';
import { IAccordionRespository } from './IAccordionRepository';

@Injectable()
export class AccordionRespository
  extends Repository<Accordion>
  implements IAccordionRespository
{
  constructor(
    @InjectModel(Accordion.name)
    private readonly accordion_repository: Model<Accordion>,
  ) {
    super(accordion_repository);
  }
}
