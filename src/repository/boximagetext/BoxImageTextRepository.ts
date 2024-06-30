/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBoxImageTextRepository } from './IBoxImageTextRepository';
import { Repository } from '../Repository';
import { BoxImageText } from 'src/BoxImageText/boximagetext.model';

@Injectable()
export class BoxImageTextRepository
  extends Repository<BoxImageText>
  implements IBoxImageTextRepository
{
  constructor(
    @InjectModel(BoxImageText.name)
    private readonly boximagetext_repository: Model<BoxImageText>,
  ) {
    super(boximagetext_repository);
  }
}
