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
import { AccordionService } from './accordion.service';
import SerachPara from 'src/models/SerachPara';
import { Accordion } from './accordion.model';
import Paginations from 'src/models/Paginations';
import SiteParameter from 'src/models/SiteParameter';
//import { AuthGuard } from 'src/guards/auth.guard';
@Controller('accordion')
//@UseGuards(AuthGuard)
export class AccordionController {
  constructor(private readonly accordionService: AccordionService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<Accordion>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.accordionService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @AuthMetaData('skipAuthCheck')
  @Get('getalls')
  async getalls(@Res() res: Response) {
    const respo = await this.accordionService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @AuthMetaData('skipAuthCheck')
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    const _datasite = { site: { $regex: parainfo.sitename } } as any;
    const _dataloca = { location: parseInt(parainfo.location, 10) } as any;
    const _datas = [_datasite, _dataloca];
    const respo = await this.accordionService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbyaccordion/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.accordionService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addaccordion')
  async create(@Body() Accordiondto: Accordion, @Res() res: Response) {
    const respo = await this.accordionService.create(Accordiondto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editacordion')
  async update(@Body() Accordiondto: Accordion, @Res() res: Response) {
    const respo = await this.accordionService.update(Accordiondto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('delaccordion/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.accordionService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
