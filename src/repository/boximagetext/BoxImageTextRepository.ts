/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBoximagetextRepository } from './IBoximagetextRepository';
import { Repository } from '../Repository';
import { BoxImageText } from 'src/BoxImageText/boximagetext.model';

@Injectable()
export class BoximagetextRespository
  extends Repository<BoxImageText>
  implements IBoximagetextRepository
{
  constructor(
    @InjectModel(BoxImageText.name)
    private readonly boximagetext_repository: Model<BoxImageText>,
  ) {
    super(boximagetext_repository);
  }
}
