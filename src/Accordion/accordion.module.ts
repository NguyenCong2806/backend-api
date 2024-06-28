/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { AccordionSchema } from './accordion.model';
import { AccordionController } from './accordion.controller';
import { AccordionService } from './accordion.service';
import { AccordionRespository } from 'src/repository/accordion/AccordionRepository';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Accordion', schema: AccordionSchema }]),
    JwtModule,
  ],
  controllers: [AccordionController],
  providers: [
    AccordionService,
    {
      provide: 'IAccordionRespository',
      useClass: AccordionRespository,
    },
  ],
  exports: [AccordionService],
})
export class AccordionModule {}
