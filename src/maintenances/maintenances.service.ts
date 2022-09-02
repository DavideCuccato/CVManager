import { Injectable } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { CreateMaintenanceDto } from './dto/create-maintenance.dto'
import { UpdateMaintenanceDto } from './dto/update-maintenance.dto'

@Injectable()
export class MaintenancesService {
  constructor(private prisma: PrismaService) {}

  create(createMaintenanceDto: CreateMaintenanceDto) {
    return this.prisma.maintenance.create({ data: createMaintenanceDto })
  }

  findAll() {
    return this.prisma.maintenance.findMany()
  }

  findOne(id: number) {
    return this.prisma.maintenance.findUnique({ where: { id } })
  }

  update(id: number, updateMaintenanceDto: UpdateMaintenanceDto) {
    return this.prisma.maintenance.update({
      where: { id },
      data: updateMaintenanceDto,
    })
  }

  remove(id: number) {
    return this.prisma.maintenance.delete({ where: { id } })
  }
}
