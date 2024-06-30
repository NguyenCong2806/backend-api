/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Service } from 'src/services/Service';
import { BoxImageText } from './boximagetext.model';
import { IBoximagetextService } from 'src/services/boximagetext/Iboximagetext.service';
import { IBoximagetextRepository } from 'src/repository/boximagetext/IBoxImageTextRepository';

@Injectable()
export class BoximagetextService
  extends Service<BoxImageText>
  implements IBoximagetextService
{
  constructor(
    @Inject('IBoximagetextRepository')
    private readonly boximagetext_repository: IBoximagetextRepository,
  ) {
    super(boximagetext_repository);
  }
}
