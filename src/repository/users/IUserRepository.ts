/* eslint-disable prettier/prettier */
import { User } from 'src/users/users.model';
import { IRepository } from '../IRepository';

export interface IUserRepository extends IRepository<User> {}
