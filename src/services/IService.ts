/* eslint-disable prettier/prettier */
import { FilterQuery } from 'mongoose';
import Paginations from 'src/models/Paginations';
import ResultData from 'src/models/ResultData';
import Results from 'src/models/Results';

export interface Write<M> {
  create(item: M | any): Promise<ResultData>;
  update(item: Partial<M>): Promise<ResultData>;
  remove(id: string): Promise<ResultData>;
  deletefile(condition?: FilterQuery<M>): Promise<ResultData>;
}

export interface Read<M> {
  finds(item: Paginations<M>): Promise<Results<M>>;
  find(): Promise<ResultData>;
  findconditions(condition?: Array<FilterQuery<M>>): Promise<ResultData>;
  findcondition(condition?: FilterQuery<M>): Promise<ResultData>;
  findOne(id: string): Promise<ResultData>;
  findOneValue(condition?: FilterQuery<M>): Promise<ResultData>;
  checkkeyword(condition?: FilterQuery<M>): Promise<ResultData>;
  countcondition(condition?: FilterQuery<M>): Promise<ResultData>;
}

export interface IService<M> extends Write<M>, Read<M> {}
