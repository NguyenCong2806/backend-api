/* eslint-disable prettier/prettier */
import { FilterQuery } from 'mongoose';

export default class Paginations<T> {
  pageindex: number = 1;
  pagesize: number = 10;
  keyword?: string = null;
  condition?: FilterQuery<T>;
}
