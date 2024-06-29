/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from '../Repository';
import { ArticleHeader } from 'src/ArticleHeader/articleheader.model';
import { IArticleHeaderRespository } from './IArticleHeaderRepository';

@Injectable()
export class ArticleHeaderRespository
  extends Repository<ArticleHeader>
  implements IArticleHeaderRespository
{
  constructor(
    @InjectModel(ArticleHeader.name)
    private readonly card_repository: Model<ArticleHeader>,
  ) {
    super(card_repository);
  }
}
