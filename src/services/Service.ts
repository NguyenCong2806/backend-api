/* eslint-disable prettier/prettier */
import { FilterQuery } from 'mongoose';
import { BaseEntity } from 'src/models/BaseEntity';
import { IService } from './IService';
import { IRepository } from 'src/repository/IRepository';
import ResultData from 'src/models/ResultData';
import Paginations from 'src/models/Paginations';
import Results from 'src/models/Results';
export abstract class Service<M extends BaseEntity>
  implements IService<M>
{
  constructor(private readonly repository: IRepository<M>) {}
  async deletefile(condition?: FilterQuery<M>): Promise<ResultData> {
    return await this.repository.deletefile(condition);
  }
  async findconditions(condition?: FilterQuery<M>[]): Promise<ResultData> {
    return await this.repository.findconditions(condition);
  }
  async findcondition(condition?: FilterQuery<M>): Promise<ResultData> {
    return await this.repository.findcondition(condition);
  }
  async checkkeyword(condition?: FilterQuery<M>): Promise<ResultData> {
    return await this.repository.checkkeyword(condition);
  }
  async countcondition(condition?: FilterQuery<M>): Promise<ResultData> {
    return await this.repository.countcondition(condition);
  }
  async find(): Promise<ResultData> {
    return await this.repository.find();
  }
  async create(item: M | any): Promise<ResultData> {
    return await this.repository.create(item);
  }
  async update(item: Partial<M>): Promise<ResultData> {
    return await this.repository.update(item._id, item);
  }
  async remove(id: string): Promise<ResultData> {
    return await this.repository.delete(id);
  }
  async finds(item: Paginations<M>): Promise<Results<M>> {
    return await this.repository.finds(item);
  }
  async findOne(id: string): Promise<ResultData> {
    return await this.repository.findOne(id);
  }
  async findOneValue(condition?: FilterQuery<M>): Promise<ResultData> {
    return await this.repository.findOneValue(condition);
  }
}
