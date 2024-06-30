/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseEntity } from 'src/models/BaseEntity';

export type CardNumbersDocument = CardNumbers & Document;

@Schema()
export class CardNumbers extends BaseEntity {
  @Prop({ required: true })
  icon: string;
  @Prop()
  start: number;
  @Prop()
  end: number;
  @Prop()
  suffix: string;
  @Prop()
  prefix: string;
  @Prop()
  fontsize: number;
  @Prop()
  fontweight: number;
  @Prop()
  text: string;
  @Prop()
  site: number;
  @Prop()
  location: number;
}

export const CardNumbersSchema = SchemaFactory.createForClass(CardNumbers);
