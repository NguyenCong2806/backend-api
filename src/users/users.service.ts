/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { Service } from 'src/services/Service';
import { IUserService } from 'src/services/user/IUserService';
import { IUserRepository } from 'src/repository/users/IUserRepository';

@Injectable()
export class UsersService extends Service<User> implements IUserService {
  constructor(
    @Inject('IUserRepository')
    private readonly users_repository: IUserRepository,
  ) {
    super(users_repository);
  }
}

