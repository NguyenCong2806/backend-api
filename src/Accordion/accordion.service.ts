/* eslint-disable prettier/prettier */

import { Injectable, Inject } from '@nestjs/common';
import { Service } from 'src/services/Service';
import { Accordion } from './accordion.model';
import { IAccordionService } from 'src/services/accordion/IAccordionService';
import { IAccordionRespository } from 'src/repository/accordion/IAccordionRepository';

@Injectable()
export class AccordionService
  extends Service<Accordion>
  implements IAccordionService
{
  constructor(
    @Inject('IAccordionRespository')
    private readonly accordion_repository: IAccordionRespository,
  ) {
    super(accordion_repository);
  }
}
