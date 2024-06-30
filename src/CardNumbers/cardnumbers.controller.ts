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
  //UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthMetaData } from 'src/decorator/auth.decorator';
import { CardNumbersService } from './cardnumbers.service';
import SerachPara from 'src/models/SerachPara';
import { CardNumbers } from './cardnumbers.model';
import Paginations from 'src/models/Paginations';
import SiteParameter from 'src/models/SiteParameter';
//import { AuthGuard } from 'src/guards/auth.guard';
//@UseGuards(AuthGuard)
@Controller('cardnumbers')
export class CardNumbersController {
  constructor(private readonly cardnumbersService: CardNumbersService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<CardNumbers>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.cardnumbersService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @AuthMetaData('skipAuthCheck')
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    const _datasite = { site: parseInt(parainfo.sitename, 10) } as any;
    const _dataloca = { location: parseInt(parainfo.location, 10) } as any;
    const _datas = [_datasite, _dataloca];
    const respo = await this.cardnumbersService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async gets(@Res() res: Response) {
    const respo = await this.cardnumbersService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbycardnumbers/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.cardnumbersService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addcardnumbers')
  async create(@Body() cardnumbersdto: CardNumbers, @Res() res: Response) {
    const respo = await this.cardnumbersService.create(cardnumbersdto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editcardnumbers')
  async update(@Body() cardnumbersdto: CardNumbers, @Res() res: Response) {
    const respo = await this.cardnumbersService.update(cardnumbersdto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delcardnumbers/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.cardnumbersService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}