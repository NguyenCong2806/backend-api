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
import { CarouselService } from './carousel.service';
import SerachPara from 'src/models/SerachPara';
import Paginations from 'src/models/Paginations';
import SiteParameter from 'src/models/SiteParameter';
import { Carousel } from './carousel.model';
//import { AuthGuard } from 'src/guards/auth.guard';
//@UseGuards(AuthGuard)
@Controller('carousel')
export class CarouselController {
  constructor(private readonly carouselService: CarouselService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<Carousel>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.carouselService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @AuthMetaData('skipAuthCheck')
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    console.log(parainfo);
    const _datasite = { site: parseInt(parainfo.sitename, 10)} as any;
    const _dataloca = { location: parseInt(parainfo.location, 10) } as any;
    const _datas = [_datasite, _dataloca];
    const respo = await this.carouselService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @AuthMetaData('skipAuthCheck')
  @Get('getalls')
  async gets(@Res() res: Response) {
    const respo = await this.carouselService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbycarousel/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.carouselService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addcarousel')
  async create(@Body() carouseldto: Carousel, @Res() res: Response) {
    const respo = await this.carouselService.create(carouseldto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editcarousel')
  async update(@Body() carouseldto: Carousel, @Res() res: Response) {
    const respo = await this.carouselService.update(carouseldto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delcarousel/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.carouselService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}