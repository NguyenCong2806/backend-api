/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from '../Repository';
import { IUserRepository } from './IUserRepository';
import { User } from 'src/users/users.model';
@Injectable()
export class UsersRepository
  extends Repository<User>
  implements IUserRepository
{
  constructor(
    @InjectModel(User.name)
    private readonly users_repository: Model<User>,
  ) {
    super(users_repository);
  }
}
