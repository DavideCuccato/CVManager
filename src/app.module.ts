import { Logger, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from 'nestjs-prisma'
import { VehiclesModule } from './vehicles/vehicles.module'
import { RevisionsModule } from './revisions/revisions.module'
import { MaintenancesModule } from './maintenances/maintenances.module'
import { InsurancesModule } from './insurances/insurances.module'
import { loggingMiddleware } from './common/middleware/logging.middleware'
import { MulterModule } from '@nestjs/platform-express'
import S3 from 'aws-sdk/clients/s3'
import aws from 'aws-sdk/global'
import multerS3 from 'multer-s3'

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [loggingMiddleware(new Logger('PrismaMiddleware'))],
      },
    }),
    MulterModule.register({
      storage: multerS3({
        s3: new S3({
          endpoint: new aws.Endpoint(process.env.SPACES_ENDPOINT),
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
