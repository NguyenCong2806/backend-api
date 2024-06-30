/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseEntity } from 'src/models/BaseEntity';

export type BoxImageTextDocument = BoxImageText & Document;

@Schema()
export class BoxImageText extends BaseEntity {
  @Prop()
  image: string;
  @Prop()
  heading: string;
  @Prop()
  note: string;
  @Prop()
  location: number;
  @Prop()
  position: number;
  @Prop()
  site: number;
}

export const BoxImageTextSchema = SchemaFactory.createForClass(BoxImageText);
