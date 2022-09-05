import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateRevisionDto } from './dto/create-revision.dto'
import { UpdateRevisionDto } from './dto/update-revision.dto'

@Injectable()
export class RevisionsService {
  constructor(private prisma: PrismaService) {}

  create(createRevisionDto: CreateRevisionDto) {
    return this.prisma.revision.create({ data: createRevisionDto })
  }

  findAll() {
    return this.prisma.revision.findMany()
  }

  findOne(id: number) {
    return this.prisma.revision.findUnique({ where: { id } })
  }

  update(id: number, updateRevisionDto: UpdateRevisionDto) {
    return this.prisma.revision.update({
      where: { id },
      data: updateRevisionDto,
    })
  }

  remove(id: number) {
    return this.prisma.vehicle.delete({ where: { id } })
  }
}
