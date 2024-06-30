/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { CardSchema } from './card.model';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { CardRepository } from 'src/repository/card/CardRepository';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Card', schema: CardSchema }]),
    JwtModule,
  ],

  controllers: [CardController],
  providers: [
    CardService,
    { provide: 'ICardRepository', useClass: CardRepository },
  ],
  exports: [CardService],
})
export class CardModule {}
