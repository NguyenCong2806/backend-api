/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseEntity } from 'src/models/BaseEntity';

export type UserDocument = User & Document;

@Schema()
export class User extends BaseEntity {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  password: string;
  @Prop()
  site: string;
  @Prop()
  location: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
