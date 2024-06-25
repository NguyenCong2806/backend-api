/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseEntity } from 'src/models/BaseEntity';

export type LogoDocument = Logo & Document;

@Schema()
export class Logo extends BaseEntity {
  @Prop()
  image: string;
  @Prop()
  height: number;
  @Prop()
  width: number;
  @Prop()
  link: string;
  @Prop()
  order: number;
  @Prop()
  location: number;
  @Prop()
  site: number;
}

export const LogoSchema = SchemaFactory.createForClass(Logo);
