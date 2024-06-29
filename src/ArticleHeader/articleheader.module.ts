/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ArticleHeaderSchema } from './articleheader.model';
import { ArticleHeaderController } from './articleheader.controller';
import { ArticleHeaderService } from './articleheader.service';
import { ArticleHeaderRespository } from 'src/repository/articleheader/ArticleHeaderRepository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ArticleHeader', schema: ArticleHeaderSchema },
    ]),
    JwtModule,
  ],
  controllers: [ArticleHeaderController],
  providers: [
    ArticleHeaderService,
    {
      provide: 'IArticleHeaderRespository',
      useClass: ArticleHeaderRespository,
    },
  ],
  exports: [ArticleHeaderService],
})
export class ArticleHeaderModule {}
