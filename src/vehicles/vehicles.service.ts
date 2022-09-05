import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateVehicleDto } from './dto/create-vehicle.dto'
import { UpdateVehicleDto } from './dto/update-vehicle.dto'

@Injectable()
export class VehiclesService {
  constructor(private prisma: PrismaService) {}

  create(createVehicleDto: CreateVehicleDto) {
    return this.prisma.vehicle.create({ data: createVehicleDto })
  }

  findAll() {
    return this.prisma.vehicle.findMany()
  }

  findOne(id: number) {
    return this.prisma.vehicle.findUnique({ where: { id } })
  }

  findOneWithRelations(id: number) {
    return this.prisma.vehicle.findUnique({
      where: { id },
      include: { insurances: true, maintenances: true, revisions: true },
    })
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return this.prisma.vehicle.update({
      where: { id },
      data: updateVehicleDto,
    })
  }

  remove(id: number) {
    return this.prisma.vehicle.delete({ where: { id } })
  }
}
