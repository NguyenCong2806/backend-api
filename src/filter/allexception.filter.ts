/* eslint-disable prettier/prettier */
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces/features/arguments-host.interface';
import { Response, Request } from 'express';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException | Error, host: ArgumentsHost): void {
    const ctx: HttpArgumentsHost = host.switchToHttp();
    const response: Response = ctx.getResponse();
    const request: Request = ctx.getRequest();
    // Handling error message and logging
    this.handleMessage(exception);

    // Response to client
    AllExceptionFilter.handleResponse(request, response, exception);
  }

  private handleMessage(exception: HttpException | Error): void {
    let message = 'Internal Server Error';

    if (exception instanceof HttpException) {
      message = JSON.stringify(exception.getResponse());
    } else if (exception instanceof Error) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      message = exception.stack.toString();
    }
  }

  private static handleResponse(
    request: Request,
    response: Response,
    exception: HttpException | Error,
  ): void {
    let responseBody: any = { message: 'Internal server error' };
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;

    if (exception instanceof HttpException) {
      responseBody = exception.getResponse();
      statusCode = exception.getStatus();
    } else if (exception instanceof Error) {
      responseBody = {
        statusCode: statusCode,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: exception.stack,
      };
    }

    response.status(statusCode).json(responseBody);
  }
}
