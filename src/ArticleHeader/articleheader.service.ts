/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Service } from 'src/services/Service';
import { ArticleHeader } from './articleheader.model';
import { IArticleHeaderService } from 'src/services/articleheader/IArticleHeader.Service';
import { IArticleHeaderRespository } from 'src/repository/articleheader/IArticleHeaderRepository';

@Injectable()
export class ArticleHeaderService
  extends Service<ArticleHeader>
  implements IArticleHeaderService
{
  constructor(
    @Inject('IArticleHeaderRespository')
    private readonly articleheader_repository: IArticleHeaderRespository,
  ) {
    super(articleheader_repository);
  }
}
