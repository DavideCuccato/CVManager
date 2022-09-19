import { Logger, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from 'nestjs-prisma'
import { VehiclesModule } from './vehicles/vehicles.module'
import { RevisionsModule } from './revisions/revisions.module'
import { MaintenancesModule } from './maintenances/maintenances.module'
import { InsurancesModule } from './insurances/insurances.module'
import { loggingMiddleware } from './common/middleware/logging.middleware'

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [loggingMiddleware(new Logger('PrismaMiddleware'))],
      },
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
