import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ScheduleModule } from '@nestjs/schedule'
import { MulterModule } from '@nestjs/platform-express'
import { S3Client } from '@aws-sdk/client-s3'
import * as multerS3 from 'multer-s3'

@Module({
  imports: [
    ScheduleModule.forRoot(),
    MulterModule.register({
      storage: multerS3({
        s3: new S3Client({
          region: 'eu-south-1',
          endpoint: {
            hostname: process.env.SPACES_ENDPOINT,
            path: '',
            protocol: 'https',
          },
          credentials: {
            accessKeyId: process.env.SPACES_ACCESSKEY,
            secretAccessKey: process.env.SPACES_SECRET,
          },
        }),
        bucket: process.env.SPACES_BUCKET,
        acl: 'public-read',
        key: function (request, file, cb) {
          const fullPath = 'CVManager/' + file.originalname
          cb(null, fullPath)
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
