/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import helmet from 'helmet';
import * as compression from 'compression';
import { AllExceptionFilter } from './filter/allexception.filter';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

const PORT = parseInt(process.env.PORT, 10) || 8088;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // register all plugins and extension
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe({}));
  app.useGlobalFilters(new AllExceptionFilter());
  app.enableVersioning({ type: VersioningType.URI });
  app.use(helmet({ crossOriginResourcePolicy: false }));
  app.use(compression());

  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/public',
  });

  await app.listen(PORT, () => {
    console.log(`Application running http://localhost:${PORT}`);
  });
}

bootstrap();
