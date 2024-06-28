/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseEntity } from 'src/models/BaseEntity';

export type AccordionDocument = Accordion & Document;

@Schema()
export class Accordion extends BaseEntity {
  @Prop()
  icon: string;
  @Prop()
  title: string;
  @Prop()
  detail: string;
  @Prop()
  defaultindex: number;
  @Prop()
  location: number;
  @Prop()
  site: number;
}

export const AccordionSchema = SchemaFactory.createForClass(Accordion);
