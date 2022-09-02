import { Logger, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ScheduleModule } from '@nestjs/schedule'
import { PrismaModule } from 'nestjs-prisma'
import { VehiclesModule } from './vehicles/vehicles.module'
import { RevisionsModule } from './revisions/revisions.module'
import { MaintenancesModule } from './maintenances/maintenances.module'
import { InsurancesModule } from './insurances/insurances.module'
import { loggingMiddleware } from './common/middleware/logging.middleware'
import { MulterModule } from '@nestjs/platform-express'
import { S3Client } from '@aws-sdk/client-s3'
import * as multerS3 from 'multer-s3'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [loggingMiddleware(new Logger('PrismaMiddleware'))],
      },
    }),
    ScheduleModule.forRoot(),
    MulterModule.register({
      storage: multerS3({
        s3: new S3Client({
          region: 'eu-south-1',
          endpoint: {
            hostname: process.env.SPACES_ENDPOINT,
            path: '',
            protocol: 'https:',
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
    VehiclesModule,
    RevisionsModule,
    MaintenancesModule,
    InsurancesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
