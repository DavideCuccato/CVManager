import {
  Controller,
  Get,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common'
import { FilesInterceptor } from '@nestjs/platform-express'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('hello')
  getHelloDiff(): string {
    return this.appService.getHello()
  }

  @Post('upload-images')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadFile(@UploadedFiles() files) {
    console.log(files)
  }
}
