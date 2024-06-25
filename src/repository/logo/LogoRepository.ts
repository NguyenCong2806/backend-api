/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ILogoRepository } from './ILogoRepository';
import { Repository } from '../Repository';
import { Logo } from 'src/Logo/logo.model';

@Injectable()
export class LogoRepository
  extends Repository<Logo>
  implements ILogoRepository
{
  constructor(
    @InjectModel(Logo.name)
    private readonly logo_repository: Model<Logo>,
  ) {
    super(logo_repository);
  }
}
