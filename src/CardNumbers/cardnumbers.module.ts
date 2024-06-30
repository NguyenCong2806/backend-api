/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { CardNumbersSchema } from './cardnumbers.model';
import { CardNumbersController } from './cardnumbers.controller';
import { CardNumbersService } from './cardnumbers.service';
import { CardNumbersRepository } from 'src/repository/cardnumbers/CardNumbersRepository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CardNumbers', schema: CardNumbersSchema },
    ]),
    JwtModule,
  ],
  controllers: [CardNumbersController],
  providers: [
    CardNumbersService,
    { provide: 'ICardNumbersRepository', useClass: CardNumbersRepository },
  ],
  exports: [CardNumbersService],
})
export class CardNumbersModule {}