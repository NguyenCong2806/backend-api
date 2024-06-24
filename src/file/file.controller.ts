/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  Res,
  HttpStatus,
  Get,
  Param,
  Delete,
  //   UseGuards,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { message } from 'src/constants/message';
import { httpstatus } from 'src/constants/httpStatus';
import * as fs from 'fs';
import storage from './file.service';
import ResultData from 'src/models/ResultData';
import { MediaInfo } from 'src/models/MediaInfo';

@Controller('files')
// @UseGuards(AuthGuard)
export class FileController {
  @Get('getallfile')
  async getallfile(@Res() res: Response) {
    const data = fs.readdirSync(process.env.FILE_ROOT, {
      withFileTypes: true,
    });
    res.status(200).json(data);
  }
  @Delete('deletefile/:filename')
  async deletefile(@Param('filename') filename: string, @Res() res: Response) {
    fs.unlinkSync(process.env.FILE_ROOT + '/' + filename);
    res.status(200).json(message.Delete_Successful);
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { storage: storage }))
  uploadFile(@UploadedFile() file, @Res() res: Response) {
    console.log(file);
    const mediaInfo = new MediaInfo();
    const _data = new ResultData();

    mediaInfo.destination = file.destination;
    mediaInfo.encoding = file.encoding;
    mediaInfo.fieldname = file.fieldname;
    mediaInfo.filename = file.filename;
    mediaInfo.mimetype = file.mimetype;
    mediaInfo.originalname = file.originalname;
    mediaInfo.path = file.path;
    mediaInfo.size = file.size;
    mediaInfo.link = process.env.FILE_URL + file.filename;
    mediaInfo.status = true;

    _data.item = mediaInfo;
    _data.message = message.Download_data_successfully;
    _data.status = true;
    _data.statuscode = httpstatus.Successful_responses;

    res.status(HttpStatus.OK).json(_data);
  }

  @Post('uploads')
  @UseInterceptors(
    FilesInterceptor('files', parseInt(process.env.FILE_UP_COUNT), {
      storage: storage,
    }),
  )
  uploadMultiple(@UploadedFiles() files, @Res() res: Response) {
    res.status(HttpStatus.OK).json(true);
  }
}
