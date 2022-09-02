import { Injectable } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { CreateInsuranceDto } from './dto/create-insurance.dto'
import { UpdateInsuranceDto } from './dto/update-insurance.dto'

@Injectable()
export class InsurancesService {
  constructor(private prisma: PrismaService) {}

  create(createInsuranceDto: CreateInsuranceDto) {
    return this.prisma.insurance.create({ data: createInsuranceDto })
  }

  findAll() {
    return this.prisma.insurance.findMany({
      include: { vehicle: true },
    })
  }

  findOne(id: number) {
    return this.prisma.insurance.findUnique({ where: { id } })
  }

  update(id: number, updateInsuranceDto: UpdateInsuranceDto) {
    return this.prisma.insurance.update({
      where: { id },
      data: updateInsuranceDto,
    })
  }

  remove(id: number) {
    return this.prisma.insurance.delete({ where: { id } })
  }
}
