import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './prisma/prisma.module'
import { VehiclesModule } from './vehicles/vehicles.module'
import { RevisionsModule } from './revisions/revisions.module';
import { MaintenancesModule } from './maintenances/maintenances.module';
import { InsurancesModule } from './insurances/insurances.module';

@Module({
  imports: [PrismaModule, VehiclesModule, RevisionsModule, MaintenancesModule, InsurancesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
