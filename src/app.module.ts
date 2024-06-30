/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt/dist';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { FileModule } from './file/file.module';
import { AuthModule } from './auth/auth.module';
import { CarouselModule } from './Carousel/carousel.module';
import { LogoModule } from './Logo/logo.module';
import { AccordionModule } from './Accordion/accordion.module';
import { AdvertisementModule } from './Advertisement/advertisement.module';
import { ArticleHeaderModule } from './ArticleHeader/articleheader.module';
import { BoxImageTextModule } from './BoxImageText/boximagetext.module';
@Module({
  imports: [
    //system module
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 3,
      },
      {
        name: 'medium',
        ttl: 10000,
        limit: 20,
      },
      {
        name: 'long',
        ttl: 60000,
        limit: 100,
      },
    ]),
    MongooseModule.forRoot(process.env.DATABASE_URL, {
      dbName: process.env.DATABASE_NAME,
      // auth: {
      //   username: process.env.DATABASE_USER,
      //   password: process.env.DATABASE_PASS,
      // },
    }),
    JwtModule,
    // feature module
    AuthModule,
    CarouselModule,
    LogoModule,
    AccordionModule,
    AdvertisementModule,
    ArticleHeaderModule,
    BoxImageTextModule,
    UsersModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
