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
import { LogoService } from './logo.service';
import SerachPara from 'src/models/SerachPara';
import { Logo } from './logo.model';
import Paginations from 'src/models/Paginations';
import SiteParameter from 'src/models/SiteParameter';
//import { AuthGuard } from 'src/guards/auth.guard';
//@UseGuards(AuthGuard)
@Controller('logo')
export class LogoController {
  constructor(private readonly logoService: LogoService) {}

  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<Logo>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.logoService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getalls')
  async getalls(@Res() res: Response) {
    const respo = await this.logoService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @AuthMetaData('skipAuthCheck')
  @Get('getfind')
  async finds(@Query() parainfo: SiteParameter, @Res() res: Response) {
    const _datasite = { site: parseInt(parainfo.sitename, 10) } as any;
    const _dataloca = { location: parseInt(parainfo.location, 10) } as any;
    const _datas = [_datasite, _dataloca];
    const respo = await this.logoService.findconditions(_datas);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbylogo/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.logoService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('addlogo')
  async create(@Body() Logodto: Logo, @Res() res: Response) {
    const respo = await this.logoService.create(Logodto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('editlogo')
  async update(@Body() Logodto: Logo, @Res() res: Response) {
    const respo = await this.logoService.update(Logodto);
    res.status(HttpStatus.OK).json(respo);
  }

  @Delete('dellogo/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.logoService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
