/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
  // UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthMetaData } from 'src/decorator/auth.decorator';
import { CardService } from './card.service';
import SerachPara from 'src/models/SerachPara';
import Paginations from 'src/models/Paginations';
import { Card } from './card.model';
import SiteParameter from 'src/models/SiteParameter';
//import { AuthGuard } from 'src/guards/auth.guard';
//@UseGuards(AuthGuard)
@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<Card>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.cardService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @AuthMetaData('skipAuthCheck')
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    const _datasite = { site: parseInt(parainfo.sitename, 10) } as any;
    const _datas = [_datasite];
    const respo = await this.cardService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async getalls(@Res() res: Response) {
    const respo = await this.cardService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbycard/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.cardService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addcard')
  async create(@Body() carddto: Card, @Res() res: Response) {
    const respo = await this.cardService.create(carddto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editcard')
  async update(@Body() carddto: Card, @Res() res: Response) {
    const respo = await this.cardService.update(carddto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delcard/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.cardService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
