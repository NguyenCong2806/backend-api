/* eslint-disable prettier/prettier */
import { SetMetadata } from '@nestjs/common';

export const AuthMetaData = (...metadata: string[]) =>
  SetMetadata('auth', metadata);
