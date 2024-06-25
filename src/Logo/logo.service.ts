/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Service } from 'src/services/Service';
import { ILogoService } from 'src/services/logo/ILogoService';
import { Logo } from './logo.model';
import { ILogoRepository } from 'src/repository/logo/ILogoRepository';


@Injectable()
export class LogoService extends Service<Logo> implements ILogoService {
  constructor(
    @Inject('ILogoRepository')
    private readonly logo_repository: ILogoRepository,
  ) {
    super(logo_repository);
  }
}
