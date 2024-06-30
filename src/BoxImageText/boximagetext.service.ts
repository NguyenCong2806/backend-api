/* eslint-disable prettier/prettier */
import { IBoxImageTextRepository } from './../repository/boximagetext/IBoxImageTextRepository';
import { Injectable, Inject } from '@nestjs/common';
import { Service } from 'src/services/Service';
import { BoxImageText } from './boximagetext.model';
import { IBoximagetextService } from 'src/services/boximagetext/Iboximagetext.service';

@Injectable()
export class BoximagetextService
  extends Service<BoxImageText>
  implements IBoximagetextService
{
  constructor(
    @Inject('IBoxImageTextRepository')
    private readonly boximagetext_repository: IBoxImageTextRepository,
  ) {
    super(boximagetext_repository);
  }
}
